<?php 
namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RiwayatController extends Controller
{
    // menampilkan daftar semua booking yang sesuai dengan user yang login
    public function index()
{
    if (Auth::check()) {
        $bookings = Booking::with(['user', 'katalog', 'invoice.items.produk', 'jenisLayanan'])
            ->where('user_id', auth()->user()->id)
            ->get()
            ->map(function ($booking) {
                $booking->jenis_layanan = $booking->jenis_layanan ?? (object) [
                    'jenis_layanan' => 'Jenis layanan tidak tersedia',
                    'harga' => 0,
                ];
                $booking->invoice = $booking->invoice ?? (object) [
                    'status' => 'Unpaid',
                    'items' => [],
                ];
                $booking->status = $booking->status ?? 'Diproses'; // Tambahkan fallback untuk status
                return $booking;
            });

        // Debug data sebelum mengirim ke frontend
        // dd($bookings->toArray());

        return Inertia::render('User/Riwayat', compact('bookings'));
    } else {
        return redirect()->route('auth');
    }
}
}
?>