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
        Schema::create('platelet_counts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hematologies_id')->references('id')->on('hematologies')->onDelete('cascade');
            $table->string('platelet_count');
            $table->string('clotting_time');
            $table->string('bleeding_time');
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
        Schema::dropIfExists('platelet_counts');
    }
};
