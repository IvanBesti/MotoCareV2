<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\User;
use App\Models\Katalog;
use App\Models\Invoice;
use App\Models\InvoiceItem;
use App\Models\Produk;
use App\Models\JenisLayanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class BookingController extends Controller
{
    // menampilkan daftar semua booking
    public function index()
    {
        $bookings = DB::table('ViewBookingDetails')
    ->join('users', 'ViewBookingDetails.user_id', '=', 'users.id') // JOIN dengan tabel users untuk mengambil nama pengguna
    ->join('jenis_layanans', 'ViewBookingDetails.jenis_layanan_id', '=', 'jenis_layanans.id') // JOIN dengan tabel jenis layanan
    ->leftJoin('invoices', 'ViewBookingDetails.id', '=', 'invoices.booking_id') // LEFT JOIN dengan tabel invoices untuk status pembayaran
    ->select(
        'ViewBookingDetails.id as booking_id',
        'users.username as user_nama', // Nama pengguna
        'jenis_layanans.jenis_layanan as jenis_layanan', // Nama jenis layanan
        'invoices.status as invoice_status', // Status pembayaran
        'ViewBookingDetails.katalog_id',
        'ViewBookingDetails.tahun_pembuatan',
        'ViewBookingDetails.nomor_polisi',
        'ViewBookingDetails.km_kendaraan',
        'ViewBookingDetails.jadwal_booking',
        'ViewBookingDetails.status as booking_status',
        'ViewBookingDetails.catatan',
        'ViewBookingDetails.created_at',
        'ViewBookingDetails.updated_at'
    )
    ->get();

        // Debug log
        foreach ($bookings as $booking) {
            logger()->info("Booking data:", (array) $booking);
        }

        return Inertia::render('Admin/ManajemenBooking', compact('bookings'));
    }

    // menampilkan form untuk tambah booking
    public function create()
    {
        
        $users = User::all();
        $katalogs = Katalog::all();
        $jenisLayanans = JenisLayanan::all();
        return Inertia::render("Admin/TambahBooking", compact("users", "katalogs", "jenisLayanans"));
    }

    // menyimpan data booking baru ke dalam database
    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'jenis_layanan_id' => 'required',
                'katalog_id' => 'required',
                'tahun_pembuatan' => 'required|numeric',
                'nomor_polisi' => 'required',
                'km_kendaraan' => 'required|numeric',
                'jadwal_booking' => 'required|date',
                'catatan' => 'required',
            ]);

            // Memanggil stored procedure yang telah diperbarui
            DB::select('CALL CreateBooking(?, ?, ?, ?, ?, ?, ?, ?)', [
                $validatedData['user_id'],
                $validatedData['jenis_layanan_id'],
                $validatedData['katalog_id'],
                $validatedData['tahun_pembuatan'],
                $validatedData['nomor_polisi'],
                $validatedData['km_kendaraan'],
                $validatedData['jadwal_booking'],
                $validatedData['catatan']
            ]);
        });

        return redirect()->route('admin.booking.index')->with('success', 'Data booking berhasil ditambahkan');
    }

    // menampilkan detail booking
    public function show(Booking $booking)
    {
        $dataBooking = Booking::with(['user', 'katalog', 'invoice.items.produk', 'jenisLayanan'])->find($booking->id);

        // Memanggil fungsi MySQL untuk menghitung total harga
        $totalPrice = DB::selectOne("SELECT calculate_total_price(?) AS total_price", [$dataBooking->invoice->id]);;

        $totalPrice = $totalPrice->total_price ?? 0;
        return Inertia::render("Admin/DetailBooking", compact('dataBooking', 'totalPrice'));
    }

    // menampilkan form untuk edit booking
    public function edit(Booking $booking)
    {
        $booking = Booking::with(['user', 'katalog', 'invoice'])->find($booking->id);
        $users = User::all();
        $katalogs = Katalog::all();
        $jenisLayanans = JenisLayanan::all();
        return Inertia::render("Admin/EditBooking", compact('booking', 'users', 'katalogs', 'jenisLayanans'));
    }

    // memperbarui/update data booking yang ada
    public function update(Request $request, Booking $booking)
    {
        DB::transaction(function () use ($request, $booking) {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'jenis_layanan_id' => 'required',
                'katalog_id' => 'required',
                'tahun_pembuatan' => 'required|numeric',
                'nomor_polisi' => 'required',
                'km_kendaraan' => 'required|numeric',
                'jadwal_booking' => 'required|date',
                'status' => 'required',
                'catatan' => 'nullable',
            ]);

            $booking->update([
                'user_id' => $validatedData['user_id'],
                'jenis_layanan_id' => $validatedData['jenis_layanan_id'],
                'katalog_id' => $validatedData['katalog_id'],
                'tahun_pembuatan' => $validatedData['tahun_pembuatan'],
                'nomor_polisi' => $validatedData['nomor_polisi'],
                'km_kendaraan' => $validatedData['km_kendaraan'],
                'jadwal_booking' => $validatedData['jadwal_booking'],
                'status' => $validatedData['status'],
                'catatan' => $validatedData['catatan'],
            ]);
        });

        return redirect()->route('admin.booking.index')->with('success', 'Data booking berhasil diperbarui');
    }

    // menghapus data booking
    public function destroy(Booking $booking)
    {

        $invoice = Invoice::where('booking_id', $booking->id)->first();

        $invoiceItems = InvoiceItem::where('invoice_id', $invoice->id)->get();
        

        if($invoiceItems->count() > 0){
            foreach($invoiceItems as $invoiceItem){
                $invoiceItem->delete();
            }
        }
        $invoice->delete();
        $booking->delete();
        return redirect()->back();
    }

    // menampilkan form tambah invoice
    public function createInvoice(Booking $booking)
    {
        $produks = Produk::all();
        $booking = Booking::with(['user', 'katalog', 'invoice.items.produk', 'jenisLayanan'])->where('id', $booking->id)->first();
        return Inertia::render("Admin/TambahInvoice", compact('produks', 'booking'));
    }

    public function updateInvoice(Request $request, Booking $booking)
{
    $validatedData = $request->validate([
        'user_id' => 'required',
        'booking_id' => 'required',
        'tanggal' => 'required|date',
        'status' => 'required',
        'catatan' => 'nullable',
    ]);

    $totalHarga = 0;

    foreach ($request->produk as $produk) {
        $totalHarga += $produk['harga'] * $produk['jumlah'];
    }

    $invoice = Invoice::where('booking_id', $booking->id)->first();
    $invoice->update([
        'user_id' => $validatedData['user_id'],
        'booking_id' => $validatedData['booking_id'],
        'tanggal' => $validatedData['tanggal'],
        'status' => $validatedData['status'],
        'catatan' => $validatedData['catatan'],
        // 'total_harga' => $totalHarga,
    ]);

    $invoiceItems = InvoiceItem::where('invoice_id', $invoice->id)->get();

    if ($invoiceItems->count() > 0) {
        foreach ($invoiceItems as $invoiceItem) {
            $invoiceItem->delete();
        }
    }

    try {
        foreach ($request->produk as $produk) {
            // Check if stock is sufficient before inserting
            $product = Produk::find($produk['id']);
            if ($product->stok < $produk['jumlah']) {
                return redirect()->route('admin.booking.index')->with('error', 'Insufficient stock for product: ' . $product->nama_produk);
            }

            InvoiceItem::create([
                'invoice_id' => $invoice->id,
                'produk_id' => $produk['id'],
                'jumlah' => $produk['jumlah'],
                'harga' => $produk['harga'],
            ]);
        }
    } catch (QueryException $e) {
        // Handle potential errors thrown by the trigger
        if ($e->getCode() == '45000') {
            return redirect()->route('admin.booking.index')->with('error', 'Insufficient stock for product');
        }
        throw $e;
    }

    return redirect()->route('admin.booking.index')->with('success', 'Data invoice berhasil diperbarui');
}

    public function updateStatusBooking(Request $request, Booking $booking)
    {
        $validatedData = $request->validate([
            'status' => 'required',
        ]);

        $booking->update([
            'status' => $validatedData['status'],
        ]);

        return redirect()->back();
    }

    public function updateStatusPembayaran(Request $request, Invoice $invoice)
    {
        $validatedData = $request->validate([
            'status' => 'required',
        ]);


        $invoice->update([
            'status' => $validatedData['status'],
        ]);

        return redirect()->back();
    }

    // public function updateStatusBooking(Request $request, Booking $booking)
    // {
    //     $validatedData = $request->validate([
    //         'status' => 'required',
    //     ]);

    //     $booking->update([
    //         'status' => $validatedData['status'],
    //     ]);

    //     return redirect()->back();
    // }
}
