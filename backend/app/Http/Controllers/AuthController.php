<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{

    public function register()
    {
        return view('register_page');
    }

    public function store(RegisterRequest $request)
    {
        $data = $request->validate();
        $data['email_verified'] = false;
        email_verify($request);
        
    }

    public function login()
    {
        return view('login_page');
    }

    public function auth(Request $request)
    {
        $user_email = $request.input('email');
        $user_password = $request.input('password');
        // need validate auth request
    }

    public function email_verify(Request $request)
    {
        // need validate token
        // send confirmation code to email
        return view('email_verify_page');
    }

    public function verify(Request $request)
    {
        $user_confirmation_code = $request->input('dogovor');
        $actual_confirmation_code = $user->confirmation_code;
        // validate confirmation code
        // if validated, then update account;
        return 'запрос на подтверждение почты';
    }

}
