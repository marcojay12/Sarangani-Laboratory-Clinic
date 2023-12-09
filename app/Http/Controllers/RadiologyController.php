<?php

namespace App\Http\Controllers;

use Log;
use App\Models\Radiology;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;

class RadiologyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return ChemistryExamOralGlucos::select(
        //     'id',
        //     'patient_information_id',
        //     'glucose_load',
        //     'glucose_result',
        //     'remarks'
        // )->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

         $validate = $request->validate([
            "patient_information_id" => 'required',
            "examination_ultrasound" => 'nullable',
            "result_ultrasound" => 'nullable',
            "image_ultrasound" => 'nullable',
            "examination_xray" => 'nullable',
            "result_xray" => 'nullable',
            "image_xray" => 'nullable',
         ]);

        // try {
        //     $imageName = Str::random() . '.' . $request->image->getClientOriginalExtension();
        //     Storage::disk('public')->putFileAs('radiologadiology/image', $request->image, $imageName);
        //     Radiology::create($request->post() + ['image' => $imageName]);

        //     return response()->json([
        //         'message' => 'Product Created Successfully!!'
        //     ]);
        // } catch (\Exception $e) {
        //     Log::error($e->getMessage());
        //     return response()->json([
        //         'message' => 'Something goes wrong while creating a product!!'
        //     ], 500);
        // }


         $radiologys = new Radiology($validate);
        $radiologys->save();
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
