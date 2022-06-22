<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Relasi5 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('kos')->insert(
            array(
                'name' => 'Kost Deles Sukolilo Surabaya 796534DS',
                'address' => 'Jln Deles 3 gang mawar',
                'description' => 'lokasi kos: masuk gang sebelah santana seafood. lanjut cari gang mawar dan masuk ke timur. kemudian tanya kos milik H. Rouf almarhum. atau tanya tempas kos Pak Turi/darmini. Listrik: biaya perbulan sudah termasuk listrik standard. yaitu: untuk cas hp/laptop, kipas angin, lampu. alat masak listrik dikenakan biaya tambahan 40rb/bln Fasilitas: kamar mandi luar parkiran motor kasur lemari pakaian meja belajar',
                'latitude' => -7.290544,
                'longitude' => 112.782115,
                'kos_type' => 'Kos Putra'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 1,
                'name' => '3 x 4 meter'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 1,
                'name' => 'Kamar mandi luar'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 1,
                'name' => 'Parkir'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 1,
                'name' => 'Lemari dan Meja'
            )
        );

        DB::table('category_price')->insert(
            array(
                'kos_id' => 1,
                'name' => 'Per bulan',
                'price' => 400000
            )
        );

        DB::table('my_office')->insert(
            array(
                'kos_id' => 1,
                'owner_name' => 'Pak Turi/darmini'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 1,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-001.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 1,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-002.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 1,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-003.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 1,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos1/kos1-004.jpg'
            )
        );

        DB::table('kos')->insert(
            array(
                'name' => 'Kost Cak Husin Tipe B Keputih Sukolilo Surabaya RMZ 159CK',
                'address' => 'Jl. Arif Rahman Hakim Keputih No.59 Sukolilo Surabaya (Dekat Depo Air Isi Ulang Biru Keputih)',
                'description' => 'Tamu dilarang menginap',
                'latitude' => -7.2899042,
                'longitude' => 112.7966067,
                'kos_type' => 'Kos Putri'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 2,
                'name' => '3 x 2.5 meter, Termasuk Listrik'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 2,
                'name' => 'Kasur, Meja, Lemari Baju, Kursi'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 2,
                'name' => 'Wifi, Kulkas, Dapur, Kamar Mandi Luar'
            )
        );

        DB::table('facilities')->insert(
            array(
                'kos_id' => 2,
                'name' => 'Parkir, R.Cuci, R.Jemur, R.Santai'
            )
        );

        DB::table('category_price')->insert(
            array(
                'kos_id' => 2,
                'name' => 'Per bulan',
                'price' => 540000
            )
        );

        DB::table('my_office')->insert(
            array(
                'kos_id' => 2,
                'owner_name' => 'Achmada Fiqri A Rasyad'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 2,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos2/kos2-001.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 2,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos2/kos2-002.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 2,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos2/kos2-003.jpg'
            )
        );

        DB::table('galleries')->insert(
            array(
                'kos_id' => 2,
                'filename' => 'https://github.com/zulfauzi92/Web-GIS/blob/main/kos%20image/kos2/kos2-004.jpg'
            )
        );


        // Schema::table('my_booking', function (Blueprint $table) {
        //     $table->integer('room_id')->unsigned()->change();
        //     $table->foreign('room_id')->references('id')->on('rooms')
        //         ->onUpdate('cascade')->onDelete('cascade');

        //     $table->integer('user_id')->unsigned()->change();
        //     $table->foreign('user_id')->references('id')->on('users')
        //         ->onUpdate('cascade')->onDelete('cascade');

        //     $table->integer('category_price_id')->unsigned()->change();
        //     $table->foreign('category_price_id')->references('id')->on('category_price')
        //         ->onUpdate('cascade')->onDelete('cascade');
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
