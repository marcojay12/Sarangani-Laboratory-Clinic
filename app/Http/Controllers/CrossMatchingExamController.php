<?php

namespace App\Http\Controllers;

use App\Models\CrossMatchingExam;
use Illuminate\Http\Request;

class CrossMatchingExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CrossMatchingExam::select(
            'id',
            'patient_information_id',
            'blood_type',
            'method_test',
            'serial_number',
            'donor_blood_type',
            'source',
            'component',
            'content',
            'extract_date',
            'expiry_date',
            'crossmatching_result',
            'others'
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
            "blood_type" => 'nullable',
            "method_test" => 'nullable',
            "serial_number" => 'nullable',
            "donor_blood_type" => 'nullable',
            "source" => 'nullable',
            "component" => 'nullable',
            "content" => 'nullable',
            "extract_date" => 'nullable',
            "expiry_date" => 'nullable',
            "crossmatching_result" => 'nullable',
            "others" => 'nullable'
        ]);
        $crossmatch = new CrossMatchingExam($validate);
        $crossmatch->save();
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
