<?php

namespace App\Http\Controllers;

use App\Models\MicrobiologyGramStain;
use App\Models\MicrobiologyKOHS;
use Illuminate\Http\Request;

class MicrobiologyGramStainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return MicrobiologyGramStain::select(
            'id',
            'patient_information_id',
            'lab_number',
            'specimen',
            'result',
            'epithelial_cell',
            'polymorphonuclears',
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
            "epithelial_cell" => 'nullable',
            "polymorphonuclears" => 'nullable',
            "remarks" => 'nullable'
        ]);
        $microbiology_kohs = new MicrobiologyKOHS($validate);
        $microbiology_kohs->save();
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
