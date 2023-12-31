<?php

namespace App\Http\Controllers;

use App\Models\UrineChemicalExam;
use Illuminate\Http\Request;

class UrineChemicalExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineChemicalExam::select(
            'id',
            'patient_information_id',
            'reaction',
            'sp_gravity',
            'glucose',
            'protein'
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
            "reaction" => 'nullable',
            "sp_gravity" => 'nullable',
            "glucose" => 'nullable',
            "protein" => 'nullable'
        ]);
        $urine_chem = new UrineChemicalExam($validate);
        $urine_chem->save();
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
