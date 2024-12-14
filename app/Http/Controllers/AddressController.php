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
        $addresses = Address::with('user')->where('user_id', $user->id)->get();
        return Inertia::render('Main/Address', [
            'user' => $user,
            'addresses' => $addresses,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'full_name' => 'required',
            'full_address' => 'required',
            'postal_code' => 'required',
            'street_address' => 'required',
            'type' => 'required',
            'is_default' => 'boolean',
        ]);
        // If the new address is being set as default
        if ($request->is_default) {
            // Update all existing addresses of the user to non-default
            Address::where('user_id', Auth::user()->id)
                ->where('is_default', true)
                ->update(['is_default' => false]);
        }
        Address::create(["user_id" => Auth::user()->id, "full_name" => $request->full_name, "full_address" => $request->full_address, "postal_code" => $request->postal_code, "street_address" => $request->street_address, "type" => $request->type, "is_default" => $request->is_default]);
        return to_route('address.index');
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $request->validate([
            'full_name' => 'required',
            'full_address' => 'required',
            'postal_code' => 'required',
            'street_address' => 'required',
            'type' => 'required',
            'is_default' => 'boolean',
        ]);
        $address = Address::find($id);
        if ($request->is_default) {
            // Update all existing addresses of the user to non-default
            Address::where('user_id', Auth::user()->id)
                ->where('is_default', true)
                ->update(['is_default' => false]);
        }
        $address->update([
            'full_name' => $request->full_name,
            'full_address' => $request->full_address,
            'postal_code' => $request->postal_code,
            'street_address' => $request->street_address,
            'type' => $request->type,
            'is_default' => $request->is_default,
        ]);
        return to_route('address.index');
    }

    public function destroy($id)
    {
        $address = Address::find($id);
        $address->delete();
        return to_route('address.index');
    }
}
