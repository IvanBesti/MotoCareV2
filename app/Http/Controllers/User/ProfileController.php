<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class ProfileController extends Controller
{
    public function store(Request $request, $id)
{
    \Log::info('Request Data:', $request->all()); // Log input yang diterima

    $validated = $request->validate([
        'nama' => 'required|string|max:255',
        'tanggal_lahir' => 'required|date',
        'no_telepon' => 'required|string|max:15',
        'jenis_kelamin' => 'required|in:Laki-laki,Perempuan',
        'foto' => 'nullable|image|max:2048',
    ]);

    \Log::info('Validated Data:', $validated); // Log setelah validasi

    try {
        $user = User::findOrFail($id);

        $user->update([
            'nama' => $validated['nama'],
            'tanggal_lahir' => $validated['tanggal_lahir'],
            'no_telepon' => $validated['no_telepon'],
            'jenis_kelamin' => $validated['jenis_kelamin'],
        ]);

        if ($request->hasFile('foto')) {
            $filePath = $request->file('foto')->store('profile_photos', 'public');
            $user->update(['foto' => $filePath]);
        }

        \Log::info('Data Updated Successfully'); // Log sukses
        return redirect()->back()->with('success', 'Profil berhasil diperbarui.');
    } catch (\Exception $e) {
        \Log::error('Error:', ['message' => $e->getMessage()]); // Log error
        return redirect()->back()->withErrors(['error' => 'Terjadi kesalahan saat memperbarui profil.']);
    }
}
}