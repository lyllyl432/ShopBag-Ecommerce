<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Middleware\PreventBackHistory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::group(['middleware' => 'guest'], function () {
    Route::get('/signin', [AuthController::class, 'index'])->name('auth.signin');
    Route::get('/signup', [AuthController::class, 'signup'])->name('auth.signup');
    Route::post('/store', [AuthController::class, 'store'])->name('auth.store');
    Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
});




Route::group(['middleware' => 'auth'], function () {
    Route::get('/', function () {
        return Inertia::render('Main/Shop', []);
    })->name('shop');
    Route::resource('cart', CartController::class);
    Route::post('/cart/quantities', [CartController::class, 'getQuantities']);
    Route::get('/checkout', function () {
        return Inertia::render('Main/Checkout', []);
    })->name('checkout');
});

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/signin');
})->name('logout');
