<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Cek apakah pengguna sudah login dan memiliki peran 'admin'
        if (Auth::check() && Auth::user()->role === 'admin') {
            return $next($request);
        }

        // Jika pengguna bukan admin, blokir hanya halaman admin
        if (Auth::check() && Auth::user()->role !== 'admin') {
            if ($request->is('admin/*')) { // Blokir hanya rute dengan prefix 'admin'
                return redirect('/user/home')->with('error', 'Anda tidak memiliki akses ke halaman ini.');
            }
            return $next($request); // Izinkan akses ke halaman lain
        }

        // Jika pengguna belum login, redirect ke halaman login
        return redirect('/')->with('error', 'Silakan login untuk mengakses halaman ini.');
    }
}