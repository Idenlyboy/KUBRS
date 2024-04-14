<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    

    public function index()
    {
        return 'страница личного кабинета пользователя';
    }

    public function create()
    {
        return 'страница создания пользователя';
    }

    public function store()
    {
        return 'запрос на создание пользователя';
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
