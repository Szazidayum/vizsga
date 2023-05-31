<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    public function index()
    {
        $tema = response()->json(Tema::all());
        return $tema;
    }

    public function show($id)
    {
        $tema = Tema::find($id);
        return $tema;
    }

    public function destroy($id)
    {
        Tema::find($id)->delete();
    }
}
