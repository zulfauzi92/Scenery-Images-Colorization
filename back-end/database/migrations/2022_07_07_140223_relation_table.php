<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('colorization', function (Blueprint $table) {
            $table->integer('colorless_id')->unsigned()->change();
            $table->foreign('colorless_id')->references('id')->on('colorless')
                ->onUpdate('cascade')->onDelete('cascade');

           
        });

        Schema::table('colorization', function (Blueprint $table) {
            $table->integer('colored_id')->unsigned()->change();
            $table->foreign('colored_id')->references('id')->on('colored')
                ->onUpdate('cascade')->onDelete('cascade');

           
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
