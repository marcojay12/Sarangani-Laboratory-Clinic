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
        Schema::create('covid_rapid_tests', function (Blueprint $table) {
            $table->id();
            $table->string('type_of_specimen');
            $table->string('test_kit_brand');
            $table->string('method_test');
            $table->string('result');
            $table->string('value_test');
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
        Schema::dropIfExists('covid_rapid_tests');
    }
};
