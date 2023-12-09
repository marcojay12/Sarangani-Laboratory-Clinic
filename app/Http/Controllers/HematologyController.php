<?php

namespace App\Http\Controllers;

use App\Models\Hematology;
use Illuminate\Http\Request;

class HematologyController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validate = $request->validate([
            "patient_information_id" => 'required',
            "hemoglobin" => 'nullable',
            "hematocrit" => 'nullable',
            "rbc_count" => 'nullable',
            "wbc_count" => 'nullable',
            "mcv" => 'nullable',
            "mch" => 'nullable',
            "mchc" => 'nullable',
            "neutrophils" => 'nullable',
            "lymphocytes" => 'nullable',
            "monocytes" => 'nullable',
            "eosinophils" => 'nullable',
            "basophils" => 'nullable',
            "platelet_count" => 'nullable',
            "clotting_time" => 'nullable',
            "bleeding_time" => 'nullable',
            "erythrocyte" => 'nullable',
            "reticulocyte" => 'nullable',
            "remarks_hematology" => 'nullable',
            "pt" => 'nullable',
            "protime_control" => 'nullable',
            "activity" => 'nullable',
            "inr" => 'nullable',
            "ptt" => 'nullable',
            "appt_control" => 'nullable',
            "ratio" => 'nullable',
            "remarks_coagulation" => 'nullable',

        ]);
        $hematologys = new Hematology($validate);
        $hematologys->save();
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
