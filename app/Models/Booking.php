<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Booking extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function katalog(): BelongsTo
    {
        return $this->belongsTo(Katalog::class);
    }

    // Model Booking
    public function invoice()
    {
        return $this->hasOne(Invoice::class, 'booking_id', 'id');
    }

    public function jenisLayanan(): BelongsTo
    {
        return $this->belongsTo(JenisLayanan::class, 'jenis_layanan_id', 'id')
            ->withDefault([
                'jenis_layanan' => 'Jenis layanan tidak tersedia',
                'harga' => 0,
            ]);
    }
}