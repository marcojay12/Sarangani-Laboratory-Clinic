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
        Schema::create('patient_information', function (Blueprint $table) {
            $table->id();

            $table->string('surname');
            $table->string('firstname');
            $table->string('middlename');
            $table->string('suffix');
            $table->string('birthday');
            $table->string('age');
            // $table->enum('gender', [
            //     'male',
            //     'female'
            // ]);
            $table->string('gender');
            $table->string('hospital_number');
            $table->string('lab_number');
            // $table->foreignId('hospital_lists_id')->references('id')->on('hospital_lists')->onDelete('cascade');
            // $table->foreignId('laboratory_codes_id')->references('id')->on('laboratory_codes')->onDelete('cascade');
            $table->string('address');
            $table->string('physician');
            //$table->foreignId('physicians_id')->references('id')->on('physicians')->onDelete('cascade');
            $table->string('ward');
            $table->string('bed_number');
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
        Schema::dropIfExists('patient_information');
    }
};
