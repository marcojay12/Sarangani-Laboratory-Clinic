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
        Schema::create('tp_ag_ratios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chemistries_id')->references('id')->on('chemistries')->onDelete('cascade');
            $table->string('total_protein');
            $table->string('albumin');
            $table->string('globulin');
            $table->string('ag_ratio');
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
        Schema::dropIfExists('tp_ag_ratios');
    }
};
