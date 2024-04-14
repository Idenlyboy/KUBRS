<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WashController extends Controller
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

    public function edit($wash_id)
    {
        return 'страница редактирования заявки';
    }

    public function update($wash_id)
    {
        return 'запрос на редактирование заявки';
    }

    public function destroy($wash_id)
    {
        return 'запрос на удаление заявки';
    }


}
