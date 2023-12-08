<?php

namespace App\Http\Controllers;

use App\Models\UltraSound;
use Illuminate\Http\Request;

class UltraSoundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return ChemistryExamOralGlucos::select(
        //     'id',
        //     'patient_information_id',
        //     'glucose_load',
        //     'glucose_result',
        //     'remarks'
        // )->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $validate = $request->validate([
            "blood_typing" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $patient_information = new BloodTypeExam($validate);
        $patient_information->save();
        return response()->json('Done');
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UltraSound  $ultraSound
     * @return \Illuminate\Http\Response
     */
    public function show(UltraSound $ultraSound)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UltraSound  $ultraSound
     * @return \Illuminate\Http\Response
     */
    public function edit(UltraSound $ultraSound)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UltraSound  $ultraSound
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UltraSound $ultraSound)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UltraSound  $ultraSound
     * @return \Illuminate\Http\Response
     */
    public function destroy(UltraSound $ultraSound)
    {
        //
    }
}
