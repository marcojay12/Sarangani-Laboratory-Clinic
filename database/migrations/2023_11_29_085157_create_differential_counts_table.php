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
        Schema::create('differential_counts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hematologies_id')->references('id')->on('hematologies')->onDelete('cascade');
            $table->string('neutrophils');
            $table->string('lymphocytes');
            $table->string('monocytes');
            $table->string('eosinophils');
            $table->string('basophils');
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
        Schema::dropIfExists('differential_counts');
    }
};
