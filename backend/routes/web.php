<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WashController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\DormController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/','login_page');

// Wash
Route::prefix('wash')->group(function () {
    Route::get('/active', [WashController::class, 'index'])->name('wash');//активные заявки
    Route::get('/create', [WashController::class, 'create'])->name('wash.create');//форма создания заявки
    Route::post('/', [WashController::class, 'store'])->name('wash.store');//создание заявки
    Route::delete('/{washing}', [WashController::class, 'delete'])->name('wash.delete');//удаление заявки
});

// Requests
Route::prefix('requests')->group(function () {
    Route::get('/active', [RequestController::class, 'index'])->name('requests');//активные заявки
    Route::get('/create', [RequestController::class, 'create'])->name('requests.create');//форма создания заявки
    Route::post('/', [RequestController::class, 'store'])->name('requests.store');//создание заявки
    Route::delete('/{request}', [RequestController::class, 'delete'])->name('requests.delete');//удаление заявки
});

// Users
Route::prefix('users')->group(function () {
    Route::get('/menu', [UserController::class, 'menu'])->name('users.menu');//главная страница
    Route::get('/{user}/edit', [UserController::class, 'edit'])->name('users.edit');//форма редактирования пользователя
    Route::put('/{user}/edit', [UserController::class, 'update'])->name('users.update');//редактирование пользователя
    Route::delete('/{user}', [UserController::class, 'delete'])->name('users.delete');//удаление пользователя
    Route::get('/pass_recovery', [UserController::class, 'pass_recovery'])->name('users.pass_recover');
    Route::put('/{user}/pass_recovery', [UserController::class, 'recovery'])->name('users.recovery');
});

// Auth
Route::prefix('auth')->group(function () {
    Route::get('/register', [AuthController::class, 'register'])->name('auth.register');
    Route::post('/register', [AuthController::class, 'store'])->name('auth.store');
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/login', [AuthController::class, 'auth'])->name('auth.auth');
    Route::post('/email_verify', [AuthController::class, 'verify'])->name('auth.verify');
});

// Work
Route::prefix('dorms')->group(function () {
    Route::get('/', [DormController::class, 'index'])->name('dorms');//список общежитий
    Route::get('/{dorm}', [DormController::class, 'dorm'])->name('dorms.dorm');//страница общежития
});