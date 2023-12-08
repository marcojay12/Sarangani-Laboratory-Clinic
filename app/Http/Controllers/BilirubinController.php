<?php

namespace App\Http\Controllers;

use App\Models\Bilirubin;
use Illuminate\Http\Request;

class BilirubinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Bilirubin::select(
            'id',
            'patient_information_id',
            'total_bilirubin',
            'direct_bilirubin',
            'indirect_bilirubin'
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
            "total_bilirubin" => 'nullable',
            "direct_bilirubin" => 'nullable',
            "indirect_bilirubin" => 'nullable'
        ]);
        $bilirubin = new Bilirubin($validate);
        $bilirubin->save();
        return response()->json('Done');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bilirubin  $bilirubin
     * @return \Illuminate\Http\Response
     */
    public function show(Bilirubin $bilirubin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bilirubin  $bilirubin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bilirubin $bilirubin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bilirubin  $bilirubin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bilirubin $bilirubin)
    {
        //
    }
}
