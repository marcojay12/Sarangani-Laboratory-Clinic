<?php

namespace App\Http\Controllers;

use App\Models\CultureAndSensitive;
use Illuminate\Http\Request;

class CultureAndSensitiveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CultureAndSensitive::select(
            'id',
            'patient_information_id',
            'lab_number',
            'speciment_type',
            'source_of_speciment',
            'result',
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
            "lab_number" => 'nullable',
            "speciment_type" => 'nullable',
            "source_of_speciment" => 'nullable',
            "result" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $culture = new CultureAndSensitive($validate);
        $culture->save();
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
