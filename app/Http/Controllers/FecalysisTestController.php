<?php

namespace App\Http\Controllers;

use App\Models\FecalysisTest;
use Illuminate\Http\Request;

class FecalysisTestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return FecalysisTest::select(
            'id',
            'patient_information_id',
            'lumbricoides_ova',
            'trichiura_ova',
            'hookworm_ova',
            'histolyrica_cyst',
            'histolytica_trophozoite',
            'entamoeba_coli_cyst',
            'entamoeba_coli_trophozoite',
            'giardia_lambia_cyst',
            'giardia_lambia_trophozoite',
            'others',
            'remarks',
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
