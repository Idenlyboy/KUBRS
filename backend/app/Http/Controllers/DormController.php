<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dorm;

class DormController extends Controller
{
    public function index()
    {
        $dorms = Dorm::all();
        return view('dorms', ['dorms' => $dorms]);
    }

    public function dorm($dorm_id)
    {
        return view('dorm', ['dorm' => $dorm_id]);
    }
}
