<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AuthController extends Controller
{

    public function index()
    {
        return Inertia::render('Auth/SignIn', []);
    }

    public function signup()
    {
        return Inertia::render('Auth/SignUp', []);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => ['required', 'email:rfc,dns', 'unique:App\Models\User,email'],
            'password' => ['required', Password::min(8)]
        ]);
        $validated['password'] = Hash::make($validated['password']);


        User::create(
            ['first_name' => $validated['first_name'], 'last_name' => $validated['last_name'], 'email' => $validated['email'], 'password' => $validated['password']]
        );

        return redirect(route('signin.index'));
    }
    public function authenticate(LoginRequest $request)
    {
        // $credentials = $request->validate([
        //     'email' => ['required', 'email:rfc,dns'],
        //     'password' => ['required']
        // ]);
        // if (Auth::attempt($credentials)) {
        //     $request->session()->regenerate();
        //     return redirect()->intended('shop');
        // }
        // return back()->withErrors([
        //     'email' => 'The provided credentials do not match our records.',
        // ])->onlyInput('email');
        $request->authenticate();

        $request->session()->regenerate();

        return to_route('shop');
    }
}
