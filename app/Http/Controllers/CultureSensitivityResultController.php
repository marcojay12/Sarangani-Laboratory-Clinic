<?php

namespace App\Http\Controllers;

use App\Models\CultureSensitivityResult;
use Illuminate\Http\Request;

class CultureSensitivityResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CultureSensitivityResult::select(
            'id',
            'patient_information_id',
            'lab_number',
            'specimen_type',
            'source_of_specimen',
            'result',
            'culture_isolate'
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
            "lab_number" => 'nullable',
            "specimen_type" => 'nullable',
            "source_of_specimen" => 'nullable',
            "monocytes" => 'nullable',
            "eosinophils" => 'nullable'
        ]);
        $sensitive = new CultureSensitivityResult($validate);
        $sensitive->save();
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
