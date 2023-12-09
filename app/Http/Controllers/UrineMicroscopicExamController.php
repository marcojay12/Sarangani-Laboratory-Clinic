<?php

namespace App\Http\Controllers;

use App\Models\UrineMicroscopicExam;
use Illuminate\Http\Request;

class UrineMicroscopicExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return UrineMicroscopicExam::select(
            'id',
            'patient_information_id',
            'wbc',
            'rbc',
            'epithelial_cell',
            'bacteria',
            'mucus_threads'
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
            "wbc" => 'nullable',
            "rbc" => 'nullable',
            "epithelial_cell" => 'nullable',
            "bacteria" => 'nullable',
            "mucus_threads" => 'nullable'
        ]);
        $urine_microscopic = new UrineMicroscopicExam($validate);
        $urine_microscopic->save();
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
