<?php

namespace App\Http\Controllers;

use App\Models\SerologyExamTest;
use Illuminate\Http\Request;

class SerologyExamTestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SerologyExamTest::select(
            'id',
            'patient_information_id',
            'hbsag',
            'anti_hbs',
            'anti_hcv',
            'syphilis',
            'aso',
            'ra_rf',
            'crp',
            'troponin',
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
        $validate = $request->validate([
            "hbsag" => 'nullable',
            "anti_hbs" => 'nullable',
            "anti_hcv" => 'nullable',
            "syphilis" => 'nullable',
            "aso" => 'nullable',
            "ra_rf" => 'nullable',
            "crp" => 'nullable',
            "troponin" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $serology_exam = new SerologyExamTest($validate);
        $serology_exam->save();
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
