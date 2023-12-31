<?php

namespace App\Http\Controllers;

use App\Models\CompleteBloodCount;
use Illuminate\Http\Request;

class CompleteBloodCountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CompleteBloodCount::select(
            'patient_information_id',
            'hemoglobin',
            'hematocrit',
            'rbc_count',
            'wbc_count'
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
            'patient_information_id' => 'required',
            "hemoglobin" => 'nullable',
            "hematocrit" => 'nullable',
            "rbc_count" => 'nullable',
            "wbc_count" => 'nullable'
        ]);
        $complete_blood_count = new CompleteBloodCount($validate);
        $complete_blood_count->save();
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
