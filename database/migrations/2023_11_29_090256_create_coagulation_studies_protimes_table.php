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
        Schema::create('coagulation_studies_protimes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hematologies_id')->references('id')->on('hematologies')->onDelete('cascade');
            $table->string('pt');
            $table->string('control');
            $table->string('activity');
            $table->string('inr');
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
        Schema::dropIfExists('coagulation_studies_protimes');
    }
};
