<?php

namespace App\Http\Controllers;

use App\Models\CoagulationStudiesProtime;
use Illuminate\Http\Request;

class CoagulationStudiesProtimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return CoagulationStudiesProtime::select(
            'patient_information_id',
            'pt',
            'control',
            'activity',
            'inr'
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
            "pt" => 'nullable',
            "control" => 'nullable',
            "activity" => 'nullable',
            "inr" => 'nullable'
        ]);
        $coagulation_protime = new CoagulationStudiesProtime($validate);
        $coagulation_protime->save();
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
