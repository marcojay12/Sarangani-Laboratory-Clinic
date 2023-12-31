<?php

namespace App\Http\Controllers;

use App\Models\UrineCastExam;
use Illuminate\Http\Request;

class UrineCastExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineCastExam::select(
            'id',
            'patient_information_id',
            'hyaline_cast',
            'wbc_cast',
            'rbc_cast',
            'granular_cast'
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
            "hyaline_cast" => 'nullable',
            "wbc_cast" => 'nullable',
            "rbc_cast" => 'nullable',
            "granular_cast" => 'nullable'
        ]);
        $urine_cast = new UrineCastExam($validate);
        $urine_cast->save();
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
