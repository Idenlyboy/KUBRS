<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    

    public function index()
    {
        return 'страница активных заявок пользователя';
    }

    public function create()
    {
        return 'страница создания заявки';
    }

    public function store()
    {
        return 'запрос на создание заявки';
    }

    public function edit($request_id)
    {
        return 'страница редактирования заявки';
    }

    public function update($request_id)
    {
        return 'запрос на редактирование заявки';
    }

    public function destroy($request_id)
    {
        return 'запрос на удаление заявки';
    }


}
