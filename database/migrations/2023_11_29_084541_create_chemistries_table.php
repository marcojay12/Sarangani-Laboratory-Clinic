<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chemistries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_information_id')->references('id')->on('patient_information')->onDelete('cascade');
            $table->string('lab_number');
            $table->string('speciment_type');
            $table->string('source_of_speciment');
            $table->string('result');
            $table->string('remarks_culture');


            $table->string('fbs');
            $table->string('rbs');
            $table->string('creatinine');
            $table->string('uric_acid');
            $table->string('sgot');
            $table->string('sgpt');
            $table->string('alkaline_phos');
            $table->string('ldh');
            $table->string('ggt');
            $table->string('magnesium');
            $table->string('phosphorus');
            $table->string('amylase');
            $table->string('remarks_chem');

            $table->string('cholesterol');
            $table->string('triglyceride');
            $table->string('hdl');
            $table->string('ldl');

            $table->string('hbac');

            $table->string('urine_volume');
            $table->string('serum_creatinine');
            $table->string('urine_creatinine');
            $table->string('hours_urine_creatinine');
            $table->string('creatinine_clearance');

            $table->string('sodium');
            $table->string('potassium');
            $table->string('calcium_total');
            $table->string('calcium_ionized');
            $table->string('ph');
            $table->string('chloride');

            $table->string('total_protein');
            $table->string('albumin');
            $table->string('globulin');
            $table->string('ag_ratio');

            $table->string('urea');

            $table->string('glucose_load');
            $table->string('glucose_result');
            $table->string('remark_glucos');

            $table->string('blood_fbs');
            $table->string('first_hour');
            $table->string('second_hour');
            $table->string('third_hour');

            $table->string('fasting');
            $table->string('fasting_first_hour');
            $table->string('fasting_second_hour');
            $table->string('fasting_third_hour');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chemistries');
    }
};
