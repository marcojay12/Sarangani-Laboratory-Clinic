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
        Schema::create('hematologies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_information_id')->references('id')->on('patient_information')->onDelete('cascade');
            $table->string('hemoglobin');
            $table->string('hematocrit');
            $table->string('rbc_count');
            $table->string('wbc_count');

            $table->string('mcv');
            $table->string('mch');
            $table->string('mchc');

            $table->string('neutrophils');
            $table->string('lymphocytes');
            $table->string('monocytes');
            $table->string('eosinophils');
            $table->string('basophils');

            $table->string('platelet_count');
            $table->string('clotting_time');
            $table->string('bleeding_time');

            $table->string('erythrocyte');

            $table->string('reticulocyte');
            $table->string('remarks_hematology');

            $table->string('pt');
            $table->string('protime_control');
            $table->string('activity');
            $table->string('inr');

            $table->string('ptt');
            $table->string('appt_control');
            $table->string('ratio');
            $table->string('remarks_coagulation');
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
        Schema::dropIfExists('hematologies');
    }
};
