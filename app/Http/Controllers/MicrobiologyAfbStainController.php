<?php

namespace App\Http\Controllers;

use App\Models\MicrobiologyAfbStain;
use Illuminate\Http\Request;

class MicrobiologyAfbStainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return MicrobiologyAfbStain::select(
            'id',
            'patient_information_id',
            'lab_number',
            'specimen',
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
            "specimen" => 'nullable',
            "result" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $microbiology_afb = new MicrobiologyAfbStain($validate);
        $microbiology_afb->save();
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
