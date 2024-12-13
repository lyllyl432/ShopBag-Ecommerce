<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        // $addresses = Address::where('user_id', $user->id)->get();
        return Inertia::render('Main/Address', [
            'user' => $user,
            // 'addresses' => $addresses,
        ]);
    }
}
