<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/signin', [AuthController::class, 'index'])->name('signin.index');
Route::get('/signup', [AuthController::class, 'signup']);
Route::post('/store', [AuthController::class, 'store'])->name('signup.store');
Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
Route::get('shop', function () {
    return Inertia::render('Shop', []);
})->name('shop');
