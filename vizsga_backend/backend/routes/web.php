<?php

use App\Http\Controllers\SzavakController;
use App\Http\Controllers\TemaController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/tema', [TemaController::class,'index']);
Route::get('/api/tema/{id}', [TemaController::class,'show']);
Route::get('/api/szavak/tema/{id}', [SzavakController::class,'temaval']);
Route::get('/api/szavak', [SzavakController::class,'index']);
Route::get('/api/szo/{id}', [SzavakController::class,'show']);