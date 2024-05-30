<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dorm;

class DormController extends Controller
{
    public function index()
    {
        $dorms = Dorm::all();
        return view('dorms.index', ['dorms' => $dorms]);
    }

    public function dorm($dorm_id)
    {
        return view('dorms.current', ['dorm' => $dorm_id]);
    }
}
