<?php

namespace App\Http\Controllers;

use App\Models\UrineCrystalExam;
use Illuminate\Http\Request;

class UrineCrystalExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineCrystalExam::select(
            'id',
            'patient_information_id',
            'amorphous_urates',
            'amorphous_phosphates',
            'calcium_oxalates',
            'uric_acid',
            'others'
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
            "amorphous_urates" => 'nullable',
            "amorphous_phosphates" => 'nullable',
            "calcium_oxalates" => 'nullable',
            "uric_acid" => 'nullable',
            "others" => 'nullable'
        ]);
        $urine_crystal = new UrineCrystalExam($validate);
        $urine_crystal->save();
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
