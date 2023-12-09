<?php

namespace App\Http\Controllers;

use App\Models\Serology;
use Illuminate\Http\Request;

class SerologyController extends Controller
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
            "troponin_feia" => 'nullable',
            "ck_mb" => 'nullable',
            "remarks_feia" => 'nullable',
            "hbsag" => 'nullable',
            "anti_hbs" => 'nullable',
            "anti_hcv" => 'nullable',
            "syphilis" => 'nullable',
            "aso" => 'nullable',
            "ra_rf" => 'nullable',
            "crp" => 'nullable',
            "troponin" => 'nullable',
            "remarks_serology" => 'nullable',
            "ns" => 'nullable',
            "ig_g_dengue" => 'nullable',
            "ig_m_dengue" => 'nullable',
            "typhi_h" => 'nullable',
            "paratyphi_ah" => 'nullable',
            "paratyphi_bh" => 'nullable',
            "paratyphi_ch" => 'nullable',
            "typhi_o" => 'nullable',
            "paratyphi_ao" => 'nullable',
            "paratyphi_bo" => 'nullable',
            "paratyphi_co" => 'nullable',
            "ig_g_typoid" => 'nullable',
            "ig_m_typoid" => 'nullable'


         ]);
         $serologys = new Serology($validate);
        $serologys->save();
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
