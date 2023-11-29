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
        Schema::create('electrolytes', function (Blueprint $table) {
            $table->id();
            $table->string('sodium');
            $table->string('potassium');
            $table->string('calcium');
            $table->string('ph');
            $table->string('chloride');
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
        Schema::dropIfExists('electrolytes');
    }
};
