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
        ]);
        //delete previous checkout
        Checkout::where('user_id', Auth::user()->id)->delete();
        //add new checkout


        foreach ($validated['items'] as $item) {
            $checkout = Checkout::create([
                'user_id' => Auth::user()->id,
                'total_amount' => $item['quantity'] * $item['productPrice'],
                'shipping_fee' => 120
            ]);
            CheckoutItem::create([
                'checkout_id' => $checkout->id,
                'product_id' => $item['id'],
                'price' => $item['productPrice'],
                'quantity' => $item['quantity'],
            ]);
        }
        $cartItemIds = collect($validated['items'])->pluck('cartId')->toArray();
        Cart::whereIn('id', $cartItemIds)->delete();
        return redirect()->route('checkout.index');
    }
}
