<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Katalog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class KatalogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $katalogs = Katalog::all();
        return Inertia::render("Admin/ManajemenKatalog", ['katalogs' => $katalogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/CreateKatalog");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // dd($request->all());
        $request->validate([
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'merk' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'deskripsi' => 'required|string',
        ]);

        $path = $request->file('gambar')->store('images/katalog', 'public');

        Katalog::create([
            'gambar' => $path,
            'merk' => $request->merk,
            'model' => $request->model,
            'deskripsi' => $request->deskripsi,
        ]);

        return redirect()->route('admin.katalog.index')->with('success', 'Katalog created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Katalog $katalog)
    {
        return Inertia::render("Admin/ShowKatalog", ['katalog' => $katalog]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Katalog $katalog)
    {
        return Inertia::render("Admin/EditKatalog", ['katalog' => $katalog]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Katalog $katalog)
    {

        
        dd($request->all());
        $validation = [
            'merk' => 'required|string|max:255',
            'model' => 'string|max:255',
            'deskripsi' => 'required|string',
        ];

        $data = [];

        if ($request->hasFile('gambar')) {
            $validation['gambar'] = 'image|mimes:jpeg,png,jpg,gif,svg|max:2048';
        }

        $validated = $request->validate($validation);

        // var_dump($validated);
        // die;

        // dd($validated);

        if ($request->hasFile('gambar')) {
            if (Storage::disk('public')->exists($katalog->gambar)) {
                Storage::disk('public')->delete($katalog->gambar);
            }
            $path = $request->file('gambar')->store('images/katalog', 'public');
            $data['gambar'] = $path;

        }

        

        
        $data['merk'] = $request->merk;
        $data['model'] = $request->model;
        $data['deskripsi'] = $request->deskripsi;
        $katalog->update($data);

        return redirect()->route('admin.katalog.index')->with('success', 'Katalog updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Katalog $katalog)
    {
        if (Storage::disk('public')->exists($katalog->gambar)) {
            Storage::disk('public')->delete($katalog->gambar);
        }


        $katalog->delete();
        return redirect()->back();
    }
}
