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
        Schema::create('microbiologies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_information_id')->references('id')->on('patient_information')->onDelete('cascade');
            $table->string('lab_number');
            $table->string('specimen_type');
            $table->string('source_of_specimen');
            $table->string('result_sensitive');
            $table->string('culture_isolate');

            $table->string('sensitive_report');
            $table->string('resistant_report');
            $table->string('intermediate_report');

            $table->string('specimen_gram');
            $table->string('result_gram');
            $table->string('epithelial_cell');
            $table->string('polymorphonuclears');
            $table->string('remarks_gram');

            $table->string('specimen_afb');
            $table->string('result_afb');
            $table->string('remarks_afb');

            $table->string('specimen_koh');
            $table->string('result_koh');
            $table->string('remarks_koh');
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
        Schema::dropIfExists('microbiologies');
    }
};
