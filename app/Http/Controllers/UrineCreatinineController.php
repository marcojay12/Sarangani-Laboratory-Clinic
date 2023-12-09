<?php

namespace App\Http\Controllers;

use App\Models\UrineCreatinine;
use Illuminate\Http\Request;

class UrineCreatinineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineCreatinine::select(
            'id',
            'patient_information_id',
            'urine_volume',
            'serum_creatinine',
            'urine_creatinine',
            'hours_urine_creatinine',
            'creatinine_clearance'
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
            "urine_volume" => 'nullable',
            "serum_creatinine" => 'nullable',
            "urine_creatinine" => 'nullable',
            "hours_urine_creatinine" => 'nullable',
            "creatinine_clearance" => 'nullable'
        ]);
        $urine_creatinine = new UrineCreatinine($validate);
        $urine_creatinine->save();
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
