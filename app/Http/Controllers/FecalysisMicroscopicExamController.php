<?php

namespace App\Http\Controllers;

use App\Models\FecalysisMicroscopicExam;
use Illuminate\Http\Request;

class FecalysisMicroscopicExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return FecalysisMicroscopicExam::select(
            'id',
            'patient_information_id',
            'rbc',
            'wbc',
            'fat_globules',
            'yeast_cells'
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
            "rbc" => 'nullable',
            "wbc" => 'nullable',
            "fat_globules" => 'nullable',
            "yeast_cells" => 'nullable',
        ]);
        $fecal_micro = new FecalysisMicroscopicExam($validate);
        $fecal_micro->save();
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
