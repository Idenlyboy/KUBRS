<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    

    public function index($user_id)
    {
        return 'страница активных заявок пользователя';
    }

    public function create()
    {
        return 'страница создания заявки';
    }

    public function store(Request $request)
    {
        return 'запрос на создание заявки';
    }

    public function delete($requests_id)
    {
        return 'запрос на удаление заявки(ок)';
    }


}
