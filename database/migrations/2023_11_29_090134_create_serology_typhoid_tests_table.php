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
        Schema::create('serology_typhoid_tests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('serologies_id')->references('id')->on('serologies')->onDelete('cascade');
            $table->string('ig_g');
            $table->string('ig_m');
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
        Schema::dropIfExists('serology_typhoid_tests');
    }
};
