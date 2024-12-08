<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cartItems = Cart::select('id', 'quantity', 'product_id')->get()->toArray();
        return Inertia::render('Main/Cart', ['cartItems' => $cartItems]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $cart = $request->validate([
            'product_id' => 'required|integer'
        ]);
        $cart['user_id'] = Auth::id();

        $existingCart = Cart::where('product_id', $cart['product_id'])->first();
        if ($existingCart) {
            $existingCart->quantity += 1;
            $existingCart->save();
        } else {
            Cart::create($cart);
        }

        return to_route('cart.index');
    }
    //get product quantities
    public function getQuantities(Request $request)
    {
        $request->validate([
            'productIds' => 'required|array',
            'productIds.*' => 'integer|exists:carts,product_id',
        ]);
        $quantities = Cart::whereIn('product_id', $request->input('productIds'))
            ->pluck('quantity', 'product_id');
        return response()->json(['quantities' => $quantities]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {

        $validatedData = $request->validate([
            'quantity' => 'required|integer|min:1', // Ensure quantity is valid
        ]);

        // Update the quantity of the cart item
        $cart->quantity = $validatedData['quantity'];
        $cart->save();
        return response()->json(['message' => 'Data updated successfully!'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();
        return to_route('cart.index');
    }
}
