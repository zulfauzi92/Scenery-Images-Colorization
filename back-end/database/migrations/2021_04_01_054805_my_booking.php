<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MyBooking extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('my_booking', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('user_id');
        //     $table->integer('room_id');
        //     $table->integer('category_price_id');
        //     $table->date('starting_date');
        //     $table->time('starting_time');
        //     $table->integer('quantity');
        //     $table->double('total_price');
        //     $table->string('status');
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
