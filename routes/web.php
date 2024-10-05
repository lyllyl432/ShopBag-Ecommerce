<?php

use App\Http\Controllers\AuthController;
use App\Http\Middleware\PreventBackHistory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/signin', [AuthController::class, 'index'])->name('signin.index')->middleware('guest');
Route::get('/signup', [AuthController::class, 'signup'])->middleware('guest');
Route::post('/store', [AuthController::class, 'store'])->name('signup.store')->middleware('guest');
Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
// Route::get('/shop', function () {
//     return Inertia::render('Shop', []);
// })->name('shop')->middleware(PreventBackHistory::class);
Route::get('/shop', function () {
    return Inertia::render('Main/Shop', []);
})->name('shop');
Route::get('/cart', function () {
    return Inertia::render('Main/Cart', []);
})->name('cart');



Route::get('/logout', function () {
    Auth::logout();
    return redirect('/signin');
})->name('logout');
