<?php

namespace App\Http\Controllers;

use App\Models\Chemistry;
use Illuminate\Http\Request;

class ChemistryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
             "patient_information_id" => 'required',
            "lab_number" => 'nullable',
            "speciment_type" => 'nullable',
            "source_of_speciment" => 'nullable',
            "result" => 'nullable',
            "remarks_culture" => 'nullable',


            "fbs" => 'nullable',
            "rbs" => 'nullable',
            "creatinine" => 'nullable',
            "uric_acid" => 'nullable',
            "sgot" => 'nullable',
            "sgpt" => 'nullable',
            "alkaline_phos" => 'nullable',
            "ldh" => 'nullable',
            "ggt" => 'nullable',
            "magnesium" => 'nullable',
            "phosphorus" => 'nullable',
            "amylase" => 'nullable',
            "remarks_chem" => 'nullable',

            "cholesterol" => 'nullable',
            "triglyceride" => 'nullable',
            "hdl" => 'nullable',
            "ldl" => 'nullable',

            "hbac" => 'nullable',

            'urine_volume' => 'nullable',
            'serum_creatinine'  => 'nullable',
            'urine_creatinine'  => 'nullable',
            'hours_urine_creatinine'  => 'nullable',
            'creatinine_clearance'  => 'nullable',

            "sodium" => 'nullable',
            "potassium" => 'nullable',
            "calcium_total"   => 'nullable',
            "calcium_ionized"   => 'nullable',
            "ph"        => 'nullable',
            "chloride"  => 'nullable',

            "total_bilirubin" => 'nullable',
            "direct_bilirubin" => 'nullable',
            "indirect_bilirubin" => 'nullable',

            "total_protein" => 'nullable',
            "albumin" => 'nullable',
            "globulin" => 'nullable',
            "ag_ratio" => 'nullable',

            'urea' => 'nullable',

            "glucose_load" => 'nullable',
            "glucose_result" => 'nullable',
            "remark_glucos" => 'nullable',


            "fasting" => 'nullable',
            "fasting_first_hour" => 'nullable',
            "fasting_second_hour" => 'nullable',
            "fasting_third_hour" => 'nullable',

            'blood_fbs' => 'nullable',
            'first_hour' => 'nullable',
            'second_hour' => 'nullable',
            'third_hour' => 'nullable'

        ]);
        $culture = new Chemistry($validate);
        $culture->save();
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
