<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\EmailVerifyRequest;
use App\Http\Requests\EmailRequest;

class AuthController extends Controller
{

    public function register()
    {
        return view('register.index');
    }

    public function store(RegisterRequest $request)
    {
        //need validate register data
        $data = $request->all();
        $data['email_verified'] = false;
        email_verify($request);
        
    }

    public function login()
    {
        return view('login.index');
    }

    public function auth(LoginRequest $request)
    {
        $data = $request->all();
        $user_email = $data['email'];
        $user_password = $data['password'];
        // need validate auth request
    }

    public function email_verify(EmailRequest $request)
    {
        $data = $request->all();
        // need validate token
        // send confirmation code to email
        return view('email_verify.index');
    }

    public function verify(EmailVerifyRequest $request)
    {
        $data = $request->all();
        $user_confirmation_code = $data['user_confirmation_code'];
        $actual_confirmation_code = app('user')->confirmation_code;
        // validate confirmation code
        // if validated, then update account;
        return 'запрос на подтверждение почты';
    }

}
