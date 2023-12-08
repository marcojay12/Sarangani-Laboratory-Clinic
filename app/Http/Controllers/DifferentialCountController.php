<?php

namespace App\Http\Controllers;

use App\Models\DifferentialCount;
use Illuminate\Http\Request;

class DifferentialCountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return DifferentialCount::select(
            'id',
            'patient_information_id',
            'neutrophils',
            'lymphocytes',
            'monocytes',
            'eosinophils',
            'basophils'
        )->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validate = $request->validate([
            "neutrophils" => 'nullable',
            "lymphocytes" => 'nullable',
            "monocytes"   => 'nullable',
            "eosinophils" => 'nullable',
            "basophils"   => 'nullable',
        ]);
        $differential = new DifferentialCount($validate);
        $differential->save();
        return response()->json('Done');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
