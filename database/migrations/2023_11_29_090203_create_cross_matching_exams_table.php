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
        Schema::create('cross_matching_exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cross_matchings_id')->references('id')->on('cross_matchings')->onDelete('cascade');
            $table->string('blood_type');
            $table->string('method_test');
            $table->string('serial_number');
            $table->string('donor_blood_type');
            $table->string('source');
            $table->string('component');
            $table->string('content');
            $table->string('extract_date');
            $table->string('expiry_date');
            $table->string('crossmatching_result');
            $table->string('others');
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
        Schema::dropIfExists('cross_matching_exams');
    }
};
