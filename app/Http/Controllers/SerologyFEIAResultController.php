<?php

namespace App\Http\Controllers;

use App\Models\SerologyFEIAResult;
use Illuminate\Http\Request;

class SerologyFEIAResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SerologyFEIAResult::select(
            'id',
            'patient_information_id',
            'fluorescence_enzyme',
            'cardiac_markers',
            'troponin',
            'ck_mb',
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
            "fluorescence_enzyme" => 'nullable',
            "cardiac_markers" => 'nullable',
            "troponin" => 'nullable',
            "ck_mb" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $serology_feia = new SerologyFEIAResult($validate);
        $serology_feia->save();
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
