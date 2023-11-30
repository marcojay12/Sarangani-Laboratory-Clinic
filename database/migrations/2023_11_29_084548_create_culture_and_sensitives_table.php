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
        Schema::create('culture_and_sensitives', function (Blueprint $table) {
            $table->id();
            $table->foreignId('chemistries_id')->references('id')->on('chemistries')->onDelete('cascade');
            $table->string('speciment_type');
            $table->string('source_of_specimen');
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
        Schema::dropIfExists('culture_and_sensitives');
    }
};
