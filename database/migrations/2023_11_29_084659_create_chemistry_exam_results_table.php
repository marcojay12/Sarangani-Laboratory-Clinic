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
        Schema::create('chemistry_exam_results', function (Blueprint $table) {
            $table->id();
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
            $table->string('remarks');
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
        Schema::dropIfExists('chemistry_exam_results');
    }
};
