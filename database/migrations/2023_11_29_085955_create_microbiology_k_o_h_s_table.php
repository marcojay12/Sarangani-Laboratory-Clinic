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
        Schema::create('microbiology_k_o_h_s', function (Blueprint $table) {
            $table->id();
           // $table->foreignId('laboratory_codes_id')->references('id')->on('laboratory_codes')->onDelete('cascade');
            $table->string('specimen');
            $table->string('result');
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
        Schema::dropIfExists('microbiology_k_o_h_s');
    }
};
