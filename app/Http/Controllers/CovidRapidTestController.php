<?php

namespace App\Http\Controllers;

use App\Models\CovidRapidTest;
use Illuminate\Http\Request;

class CovidRapidTestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CovidRapidTest::select(
            'id',
            'patient_information_id',
            'type_of_specimen',
            'test_kit_brand',
            'method_test',
            'result',
            'value_test',
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
            'patient_information_id' => 'required',
            "type_of_specimen" => 'nullable',
            "test_kit_brand" => 'nullable',
            "method_test" => 'nullable',
            "result" => 'nullable',
            "value_test" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $covid = new CovidRapidTest($validate);
        $covid->save();
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
