<?php

namespace App\Http\Controllers;

use App\Models\Serology;
use App\Models\SerologyWidalTest;
use Illuminate\Http\Request;

class SerologyWidalTestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return SerologyWidalTest::select(
            'id',
            'patient_information_id',
            'typhi_h',
            'paratyphi_ah',
            'paratyphi_bh',
            'paratyphi_ch',
            'typhi_o',
            'paratyphi_ao',
            'paratyphi_bo',
            'paratyphi_co',
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
            "blood_typing" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $patient_information = new BloodTypeExam($validate);
        $patient_information->save();
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
