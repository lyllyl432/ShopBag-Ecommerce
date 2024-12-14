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
            'username' => 'required',
            'email' => ['required', 'email:rfc,dns', 'unique:App\Models\User,email'],
            'password' => ['required', Password::min(8)]
        ]);
        $validated['password'] = Hash::make($validated['password']);


        User::create(
            ['username' => $validated['username'], 'email' => $validated['email'], 'password' => $validated['password']]
        );

        return redirect(route('auth.signin'));
    }
    public function authenticate(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return to_route('shop.index');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return to_route('auth.signin');
    }

    //account update
    public function accountUpdate(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'email' => 'required|email|unique:users,email,' . Auth::id(),
            'phone' => 'nullable|numeric|digits:11',
            'date' => 'nullable|numeric|between:1,31',
            'month' => 'nullable|numeric|between:1,12',
            'year' => 'nullable|numeric|min:1900|max:' . date('Y'),
            'gender' => 'nullable|in:male,female',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg|max:1024',
        ]);

        // Get the current user instance
        $user = User::find(Auth::id());

        // Set attributes individually
        $user->username = $request->username;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->date = $request->date;
        $user->month = $request->month;
        $user->year = $request->year;
        $user->gender = $request->gender;

        if ($request->hasFile('avatar')) {
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = $avatarPath;
        }
        // Save the changes
        $user->save();

        return to_route('account.index');
    }
}
