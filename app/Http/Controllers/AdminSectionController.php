<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminLogin;
use App\Http\Requests\AdminSignup;
use App\Models\AdminSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminSectionController extends Controller
{
    //
    /** @var App\Models\AdminSection $admin*/

    public function signup(AdminSignup $request)
    {
        $data = $request->validated();

        $admin = AdminSection::create([
            'name' => $data['name'],
            'admin_username' => $data['admin_username'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $admin->createToken('main')->plainTextToken;

        return response([
            'admin' => $admin,
            'token' => $token
        ]);
    }

    public function login(AdminLogin $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Incorrect Credentials!'
            ], 422);
        }
        $admin = Auth::admin();
        $token = $admin->createToken('main')->plainTextToken;

        return response([
            'admin' => $admin,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        /** @var AdminSection $admin */

        $admin = Auth::user();

        $admin->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }
}
