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
        Schema::create('complete_blood_counts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hematologies_id')->references('id')->on('hematologies')->onDelete('cascade');
            $table->string('hemoglobin');
            $table->string('hematocrit');
            $table->string('rbc_count');
            $table->string('wbc_count');
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
        Schema::dropIfExists('complete_blood_counts');
    }
};
