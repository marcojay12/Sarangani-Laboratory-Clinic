<?php

namespace App\Http\Controllers;

use App\Models\ChemistryExamResult;
use Illuminate\Http\Request;

class ChemistryExamResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return ChemistryExamResult::select(
            'id',
            'patient_information_id',
            'fbs',
            'rbs',
            'creatinine',
            'uric_acid',
            'sgot',
            'sgpt',
            'alkaline_phos',
            'ldh',
            'ggt',
            'magnesium',
            'phosphorus',
            'amylase',
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
