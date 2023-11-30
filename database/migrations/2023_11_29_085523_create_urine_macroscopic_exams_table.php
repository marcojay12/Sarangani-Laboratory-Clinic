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
        Schema::create('urine_macroscopic_exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('microscopies_id')->references('id')->on('microscopies')->onDelete('cascade');
            $table->string('color');
            $table->string('transparency');
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
        Schema::dropIfExists('urine_macroscopic_exams');
    }
};
