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
            $table->date('date_printed');
            $table->time('time_printed');
            $table->date('date_recieved');
            $table->time('time_recieved');
            $table->date('date_released');
            $table->time('time_released');
            $table->string('fullname');
            $table->integer('age');
            $table->enum('gender', [
                'male',
                'female'
            ]);
            $table->foreignId('hospital_lists_id')->references('id')->on('hospital_lists')->onDelete('cascade');
            $table->foreignId('laboratory_codes_id')->references('id')->on('laboratory_codes')->onDelete('cascade');
            $table->text('address');
            $table->foreignId('physicians_id')->references('id')->on('physicians')->onDelete('cascade');
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
