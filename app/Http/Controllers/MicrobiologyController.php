<?php

namespace App\Http\Controllers;

use App\Models\Microbiology;
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

         $validate = $request->validate([
            "patient_information_id" => 'required',
             "lab_number" => 'nullable',
            "specimen_type" => 'nullable',
            "source_of_specimen" => 'nullable',
            "result_sensitive" => 'nullable',
            "culture_isolate" => 'nullable',
            "sensitive_report" => 'nullable',
            "resistant_report" => 'required',
            "intermediate_report" => 'nullable',
            "specimen_gram" => 'nullable',
            "result_gram" => 'nullable',
            "epithelial_cell" => 'nullable',
            "polymorphonuclears" => 'nullable',
            "remarks_gram" => 'nullable',
            "specimen_afb" => 'required',
            "result_afb" => 'nullable',
            "remarks_afb" => 'nullable',
            "specimen_koh" => 'nullable',
            "result_koh" => 'nullable',
            "remarks_koh" => 'nullable'
         ]);
         $microbiologys = new Microbiology($validate);
        $microbiologys->save();
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
