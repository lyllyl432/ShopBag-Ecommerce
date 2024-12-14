<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $addresses = Address::with('user')->where('user_id', $user->id)->where('is_default', true)->get();
        return Inertia::render('Main/Purchase', [
            'user' => $user,
            'address' => $addresses,
        ]);
    }
}
