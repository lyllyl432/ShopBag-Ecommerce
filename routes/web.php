<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\ShopController;
use App\Http\Middleware\PreventBackHistory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
//Guest routes
Route::group(['middleware' => 'guest'], function () {
    Route::get('/signin', [AuthController::class, 'index'])->name('auth.signin');
    Route::get('/signup', [AuthController::class, 'signup'])->name('auth.signup');
    Route::post('/store', [AuthController::class, 'store'])->name('auth.store');
    Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
});
//Authenticated routes
Route::group(['middleware' => 'auth'], function () {
    Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');
    Route::resource('cart', CartController::class);
    Route::post('/cart/quantities', [CartController::class, 'getQuantities']);
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');
    Route::get('/purchase', [PurchaseController::class, 'index'])->name('purchase.index');
});

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/signin');
})->name('logout');
