<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Checkout;
use App\Models\CheckoutItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        $checkouts = Checkout::with('checkoutItems')
            ->where('user_id', Auth::user()->id)
            ->get();
        $user = Auth::user();
        return Inertia::render('Main/Checkout', [
            'checkouts' => $checkouts,
            'user' => $user
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|integer',
            'items.*.quantity' => 'required|integer|min:1',
            'items.*.productPrice' => 'required|integer',
            'items.*.cartId' => 'required|integer',
            'total_amount' => 'required|integer',
            'total_quantity' => 'required|integer',
        ]);
        //delete previous checkout
        Checkout::where('user_id', Auth::user()->id)->delete();
        //add new checkout
        $checkout = Checkout::create([
            'user_id' => Auth::user()->id,
            'total_amount' => $validated['total_amount'],
            'total_quantity' => $validated['total_quantity'],
            'shipping_fee' => 120
        ]);

        foreach ($validated['items'] as $item) {
            CheckoutItem::create([
                'checkout_id' => $checkout->id,
                'product_id' => $item['id'],
                'quantity' => $item['quantity'],
                'price' => $item['productPrice'],
                'sub_total' => $item['productPrice'] * $item['quantity'],
            ]);
        }
        $cartItemIds = collect($validated['items'])->pluck('cartId')->toArray();
        Cart::whereIn('id', $cartItemIds)->delete();
        return redirect()->route('checkout.index');
    }
}
