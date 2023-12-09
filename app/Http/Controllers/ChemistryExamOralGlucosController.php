<?php

namespace App\Http\Controllers;

use App\Models\ChemistryExamOralGlucos;
use Illuminate\Http\Request;

class ChemistryExamOralGlucosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return ChemistryExamOralGlucos::select(
            'patient_information_id',
            'glucose_load',
            'glucose_result',
            'remarks'
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
            "glucose_load" => 'nullable',
            "glucose_result" => 'nullable'
        ]);
        $chem_oral_glucos = new ChemistryExamOralGlucos($validate);
        $chem_oral_glucos->save();
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
