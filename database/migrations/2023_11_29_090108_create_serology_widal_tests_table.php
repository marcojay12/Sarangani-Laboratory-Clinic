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
        Schema::create('serology_widal_tests', function (Blueprint $table) {
            $table->id();
            $table->string('typhi_h');
            $table->string('paratyphi_ah');
            $table->string('paratyphi_bh');
            $table->string('paratyphi_ch');
            $table->string('typhi_o');
            $table->string('paratyphi_ao');
            $table->string('paratyphi_bo');
            $table->string('paratyphi_co');
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
        Schema::dropIfExists('serology_widal_tests');
    }
};
