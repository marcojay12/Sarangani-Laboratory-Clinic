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
        Schema::create('serologies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_information_id')->references('id')->on('patient_information')->onDelete('cascade');
            $table->string('troponin_feia');
            $table->string('ck_mb');
            $table->string('remarks_feia');

            $table->string('hbsag');
            $table->string('anti_hbs');
            $table->string('anti_hcv');
            $table->string('syphilis');
            $table->string('aso');
            $table->string('ra_rf');
            $table->string('crp');
            $table->string('troponin');
            $table->string('remarks_serology');

            $table->string('ns');
            $table->string('ig_g_dengue');
            $table->string('ig_m_dengue');

            $table->string('typhi_h');
            $table->string('paratyphi_ah');
            $table->string('paratyphi_bh');
            $table->string('paratyphi_ch');
            $table->string('typhi_o');
            $table->string('paratyphi_ao');
            $table->string('paratyphi_bo');
            $table->string('paratyphi_co');

            $table->string('ig_g_typoid');
            $table->string('ig_m_typoid');
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
        Schema::dropIfExists('serologies');
    }
};
