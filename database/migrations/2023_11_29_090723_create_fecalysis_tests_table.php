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
        Schema::create('fecalysis_tests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('microscopies_id')->references('id')->on('microscopies')->onDelete('cascade');
            $table->string('lumbricoides_ova');
            $table->string('trichiura_ova');
            $table->string('hookworm_ova');
            $table->string('histolytica_cyst');
            $table->string('histolytica_trophozoite');
            $table->string('entamoeba_coli_cyst');
            $table->string('entamoeba_coli_trophozoite');
            $table->string('giardia_lamblia_cyst');
            $table->string('giardia_lamblia_trophozoite');
            $table->string('others');
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
        Schema::dropIfExists('fecalysis_tests');
    }
};
