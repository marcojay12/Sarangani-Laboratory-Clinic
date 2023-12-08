<?php

namespace App\Http\Controllers;

use App\Models\PatientInformation;
use Illuminate\Http\Request;

class PatientInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $patient_information = PatientInformation::all();
        return response()->json($patient_information);
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
            "surname" => 'required',
            "middlename" => 'required',
            "firstname" => 'required',
            "suffix" => 'required',
            "age" => 'required',
            "gender" => 'required',
            "hospital_number" => 'required',
            "lab_number" => 'required',
            "address" => 'required',
            "physician" => 'required',
            "ward" => 'required',
            "bed_number" => 'required',
            "birthday" => 'required'
        ]);
        $patient_information = new PatientInformation($validate);
        $patient_information->save();
        return response()->json('Patient Succcessfully Registered');
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
