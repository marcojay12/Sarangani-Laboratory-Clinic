<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MicrobiologyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Microbiolo::select(
        //     'id',
        //     'patient_information_id',
        //     'lab_number',
        //     'specimen',
        //     'result',
        //     'epithelial_cell',
        //     'polymorphonuclears',
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
        //
        // $validate = $request->validate([
        //     "lab_number" => 'nullable',
        //     "specimen" => 'nullable',
        //     "result" => 'nullable',
        //     "epithelial_cell" => 'nullable',
        //     "polymorphonuclears" => 'nullable',
        //     "remarks" => 'nullable'
        // ]);
        // $patient_information = new BloodTypeExam($validate);
        // $patient_information->save();
        // return response()->json('Done');
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
