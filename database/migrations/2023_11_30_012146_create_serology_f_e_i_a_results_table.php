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
        Schema::create('serology_f_e_i_a_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('serologies_id')->references('id')->on('serologies')->onDelete('cascade');
            $table->string('fluorescence_enzyme');
            $table->string('cardiac_markers');
            $table->string('troponin');
            $table->string('ck_mb');
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
        Schema::dropIfExists('serology_f_e_i_a_results');
    }
};
