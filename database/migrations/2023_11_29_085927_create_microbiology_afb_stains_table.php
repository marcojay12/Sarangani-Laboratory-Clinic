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
        Schema::create('microbiology_afb_stains', function (Blueprint $table) {
            $table->id();
            $table->foreignId('microbiologies_id')->references('id')->on('microbiologies')->onDelete('cascade');
            $table->string('specimen');
            $table->string('result');
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
        Schema::dropIfExists('microbiology_afb_stains');
    }
};
