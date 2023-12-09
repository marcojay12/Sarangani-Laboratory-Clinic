<?php

namespace App\Http\Controllers;

use App\Models\UrineGlucose;
use Illuminate\Http\Request;

class UrineGlucoseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineGlucose::select(
            'id',
            'patient_information_id',
            'fasting',
            'first_hour',
            'second_hour',
            'third_hour'
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
            "fasting" => 'nullable',
            "first_hour" => 'nullable',
            "second_hour" => 'nullable',
            "third_hour" => 'nullable'
        ]);
        $urine_glucose = new UrineGlucose($validate);
        $urine_glucose->save();
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
