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
        Schema::create('chemistry_exam_oral_glucos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chemistries_id')->references('id')->on('chemistries')->onDelete('cascade');
            $table->string('glucose_load');
            $table->string('glucose_result');
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
        Schema::dropIfExists('chemistry_exam_oral_glucos');
    }
};
