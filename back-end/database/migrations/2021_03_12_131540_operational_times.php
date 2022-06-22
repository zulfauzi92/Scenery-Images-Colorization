<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class OperationalTimes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('operational_times', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('room_id');
        //     $table->integer('user_id');
        //     $table->string('day');
        //     $table->time('open_times');
        //     $table->time('close_times');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
