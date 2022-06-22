<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Relasi4 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('my_office', function (Blueprint $table) {
            $table->integer('kos_id')->unsigned()->change();
            $table->foreign('kos_id')->references('id')->on('kos')
                ->onUpdate('cascade')->onDelete('cascade');

            // $table->integer('user_id')->unsigned()->change();
            // $table->foreign('user_id')->references('id')->on('users')
            //     ->onUpdate('cascade')->onDelete('cascade');
           
        });
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
