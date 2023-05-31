<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Szavak;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SzavakController extends Controller
{
    public function index()
    {
        $szavak = response()->json(Szavak::all());
        return $szavak;
    }

    public function show($id)
    {
        $szavak = Szavak::find($id);
        return $szavak;
    }

    public function temaval($id)
    {
        $szavak = DB::table('szavaks as sz')
        ->select('sz.id as id', 'sz.angol as angol', 'sz.magyar as magyar', 't.temanev as temanev')
        ->join('temas as t', 'sz.temaId', '=', 't.id')
        ->where('t.id', '=', $id)
        ->get();
        return $szavak;
    }

    public function destroy($id)
    {
        Szavak::find($id)->delete();
    }
}
