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
        Schema::create('urine_chemical_exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('microscopies_id')->references('id')->on('microscopies')->onDelete('cascade');
            $table->string('reaction');
            $table->string('sp_gravity');
            $table->string('glucose');
            $table->string('protein');
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
        Schema::dropIfExists('urine_chemical_exams');
    }
};
