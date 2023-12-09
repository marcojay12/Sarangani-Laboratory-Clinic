<?php

namespace App\Http\Controllers;

use App\Models\Microscopy;
use Illuminate\Http\Request;

class MicroscopyController extends Controller
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
            "specimen" => 'nullable',
            "result" => 'nullable',
            "remarks_pregnancy" => 'nullable',


            "color" => 'nullable',
            "transparency" => 'nullable',

            "wbc_urine" => 'nullable',
            "rbc_urine" => 'nullable',
            "epithelial_cell" => 'nullable',
            "bacteria" => 'nullable',
            "mucus_threads" => 'nullable',

            "reaction" => 'nullable',
            "sp_gravity" => 'nullable',
            "glucose" => 'nullable',
            "protein" => 'nullable',

            "amorphous_urates" => 'nullable',
            "amorphous_phosphates" => 'nullable',
            "calcium_oxalates" => 'nullable',
            "triple_phosphates" => 'nullable',
            "uric_acid" => 'nullable',
            "others_crystal" => 'nullable',

            "hyaline_cast" => 'nullable',
            "wbc_cast" => 'nullable',
            "rbc_cast" => 'nullable',
            "granular_cast" => 'nullable',
            "pregnancy_test" => 'nullable',
            "remarks_cast" => 'nullable',

            "color_fecal" => 'nullable',
            "consistency" => 'nullable',

            "rbc_fecal" => 'nullable',
            "wbc_fecal" => 'nullable',
            "fat_globules" => 'nullable',
            "yeast_cells" => 'nullable',

            "fecal_occult_blood" => 'nullable',

            "lumbricoides_ova" => 'nullable',
            "trichiura_ova" => 'nullable',
            "hookworm_ova" => 'nullable',
            "histolytica_cyst" => 'nullable',
            "histolytica_trophozoite" => 'nullable',
            "entamoeba_coli_cyst" => 'nullable',
            "entamoeba_coli_trophozoite" => 'nullable',
            "giardia_lamblia_cyst" => 'nullable',
            "giardia_lamblia_trophozoite" => 'nullable',
            "others_fecal" => 'nullable',
            "remarks_fecal" => 'nullable'

         ]);
         $microscopy = new Microscopy($validate);
        $microscopy->save();
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
