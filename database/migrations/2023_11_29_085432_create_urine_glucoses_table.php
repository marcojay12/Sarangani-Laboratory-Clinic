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
        Schema::create('urine_glucoses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chemistries_id')->references('id')->on('chemistries')->onDelete('cascade');
            $table->string('fasting');
            $table->string('first_hour');
            $table->string('second_hour');
            $table->string('third_hour');
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
        Schema::dropIfExists('urine_glucoses');
    }
};
