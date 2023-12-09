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
        Schema::create('microscopies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_information_id')->references('id')->on('patient_information')->onDelete('cascade');

            $table->string('specimen');
            $table->string('result');
            $table->string('remarks_pregnancy');

            $table->string('color');
            $table->string('transparency');

            $table->string('wbc_urine');
            $table->string('rbc_urine');
            $table->string('epithelial_cell');
            $table->string('bacteria');
            $table->string('mucus_threads');

            $table->string('reaction');
            $table->string('sp_gravity');
            $table->string('glucose');
            $table->string('protein');

            $table->string('amorphous_urates');
            $table->string('amorphous_phosphates');
            $table->string('calcium_oxalates');
            $table->string('triple_phosphates');
            $table->string('uric_acid');
            $table->string('others_crystal');

            $table->string('hyaline_cast');
            $table->string('wbc_cast');
            $table->string('rbc_cast');
            $table->string('granular_cast');
            $table->string('pregnancy_test');
            $table->string('remarks_cast');

            $table->string('color_fecal');
            $table->string('consistency');

            $table->string('rbc_fecal');
            $table->string('wbc_fecal');
            $table->string('fat_globules');
            $table->string('yeast_cells');

            $table->string('fecal_occult_blood');

            $table->string('lumbricoides_ova');
            $table->string('trichiura_ova');
            $table->string('hookworm_ova');
            $table->string('histolytica_cyst');
            $table->string('histolytica_trophozoite');
            $table->string('entamoeba_coli_cyst');
            $table->string('entamoeba_coli_trophozoite');
            $table->string('giardia_lamblia_cyst');
            $table->string('giardia_lamblia_trophozoite');
            $table->string('others_fecal');
            $table->string('remarks_fecal');

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
        Schema::dropIfExists('microscopies');
    }
};
