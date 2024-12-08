<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckoutItem extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function checkout()
    {
        return $this->belongsTo(Checkout::class);
    }
}
