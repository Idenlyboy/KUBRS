<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function menu()
    {
        return 'страница личного кабинета пользователя';
    }

    public function edit($user_id)
    {
        return 'страница редактирования пользователя';
    }

    public function update($user_id)
    {
        return 'запрос на редактирование пользователя';
    }

    public function delete($user_id)
    {
        return 'запрос на удаление пользователя';
    }

    public function pass_recovery(Request $request)
    {
        $user_email = $request.input('dogovor');
        // validate user_email
        // send confirmation code to user_email
        return view('pass_recovery.index');
    }

    public function recovery(Request $request)
    {
        return 'запрос на изменение пароля пользователя';
    }

}
