<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;

class AuthController extends Controller
{
    public function index()
    {
        return view('');
        return 'страница личного кабинета пользователя';
    }

    public function create()
    {
        return 'страница создания пользователя';
    }

    public function login(Request $request)
    {
        return 'запрос на вход пользователя';
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->validate();
        
    }

    public function edit($user_id)
    {
        return 'страница редактирования пользователя';
    }

    public function update($user_id)
    {
        return 'запрос на редактирование пользователя';
    }

    public function destroy($user_id)
    {
        return 'запрос на удаление пользователя';
    }
}
