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
        Schema::create('reticulocyte_counts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hematologies_id')->references('id')->on('hematologies')->onDelete('cascade');
            $table->string('reticulocyte');
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
        Schema::dropIfExists('reticulocyte_counts');
    }
};
