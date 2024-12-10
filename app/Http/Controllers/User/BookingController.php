<?php 
namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\User;
use App\Models\Katalog;
use App\Models\JenisLayanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    // Menampilkan daftar semua booking
    public function index()
    {
        $bookings = Booking::all();
        $katalogs = Katalog::all();
        $jenisLayanans = JenisLayanan::all();

        // Debug data jenisLayanans
        // dd($jenisLayanans->toArray());

        return Inertia::render('User/Booking', compact('bookings', 'katalogs', 'jenisLayanans'));
    }

    // Menyimpan data booking
public function store(Request $request)
{
    // Validasi data dari request
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

    // Ambil nama jenis layanan berdasarkan ID
    $jenisLayanan = JenisLayanan::findOrFail($validatedData['jenis_layanan_id']);

    DB::transaction(function () use ($validatedData) {
        // Simpan booking ke database
        $booking = Booking::create([
            'user_id' => $validatedData['user_id'],
            'jenis_layanan_id' => $validatedData['jenis_layanan_id'],
            'katalog_id' => $validatedData['katalog_id'],
            'tahun_pembuatan' => $validatedData['tahun_pembuatan'],
            'nomor_polisi' => $validatedData['nomor_polisi'],
            'km_kendaraan' => $validatedData['km_kendaraan'],
            'jadwal_booking' => $validatedData['jadwal_booking'],
            'catatan' => $validatedData['catatan'],
        ]);

        // Simpan invoice otomatis
        DB::table('invoices')->insert([
            'booking_id' => $booking->id,
            'user_id' => $validatedData['user_id'],
            'status' => 'Unpaid',
            'tanggal' => now(),
        ]);
    });

    // Redirect ke halaman riwayat dengan pesan sukses
    return redirect()->route('user.riwayat')->with('success', 'Data booking dan invoice berhasil ditambahkan');
}
}
?>