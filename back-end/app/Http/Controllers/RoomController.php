<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\CommonRegulations;
use App\Models\Facility;
use App\Models\FoodDrinks;
use App\Models\Gallery;
use App\Models\OperationalTimes;
use App\Models\RoomCategoryPrice;
use App\Models\RoomFunction;
use App\Models\RoomType;
use App\Models\Users;
use App\Models\CategoryPrice;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function deg2rad($deg) {
        return $deg * (pi/180);
    }

    public function getDistance($lat1, $lat2, $long1, $long2) {
        $radius = 6371;
        $dLat = deg2rad($lat2-$lat1);
        $dLong = deg2rad($long2-$long1);
        $a = sin($dLat*0.441) * sin($dLat*1.883) +
             cos(deg2rad($lat1)/2) * cos(deg2rad($lat2)*11) *
             sin($dLong/11) * sin($dLong/11);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));
        $distance = $radius * $c;

        // if ($distance < 1){
        //     $distance = $distance * 1000;
        // }

        return $distance;
    }
    
    public function index()
    {
        $rooms_temp = Room::all();

        $pens_lat = -7.2758471;
        $pens_long = 112.791567;

        $data = array();
        
        foreach ($rooms_temp as $key) {

            $temp['id'] = $key->id;
            $temp['name'] = $key->name;
            $temp['description'] = $key->description;
            $temp['address'] = $key->address;
            $temp['latitude'] = $key->latitude;
            $temp['longitude'] = $key->longitude;
            $temp['kos_type'] = $key->kos_type;

            $temp['distance'] =  RoomController::getDistance(
                $pens_lat, $key->latitude,
                $pens_long, $key->longitude);

            $gallery = DB::table('galleries')
            ->where('kos_id', 'like', $key->id)
            ->first();

            if(empty($gallery)){
                $filename = "not found";
            } else {
                $filename = $gallery->filename;
            }

            $temp['filename'] = $filename;

            array_push($data, $temp);

        }

        return response()->json(compact('data'));
    }

    // public function terUpdate() {

        

    //     $rooms_temp = DB::table('rooms')
    //     ->orderBy('updated_at', 'desc')
    //     ->take(4)
    //     ->get();

    //     $rooms = array();

    //     foreach ($rooms_temp as $key) {

    //         $temp['id'] = $key->id;
    //         $temp['name'] = $key->name;
    //         $temp['description'] = $key->description;
    //         $temp['address'] = $key->address;
    //         $temp['latitude'] = $key->latitude;
    //         $temp['longitude'] = $key->longitude;

    //         $gallery = DB::table('galleries')
    //         ->where('room_id', 'like', $key->id)
    //         ->first();

    //         if(empty($gallery)){
    //             $filename = "not found";
    //         } else {
    //             $filename = $gallery->filename;
    //         }

    //         $temp['filename'] = $filename;

    //         array_push($rooms, $temp);

    //     }

    //     return response()->json(compact('rooms'));
    // }

    
    public function show($id)
    {  
        $pens_lat = -7.2758471;
        $pens_long = 112.791567;

        $room = Room::find($id);
        $detail_kos['id'] = "";
        $detail_kos['name'] = "";
        $detail_kos['address'] = "";
        $detail_kos['description'] = "";
        $detail_kos['latitude'] = "";
        $detail_kos['longitude'] = "";
        $detail_kos['kos_type'] = "";
        $detail_kos['owner_name'] = "";
        $detail_kos['distance'] = "";
        $detail_kos['gallery'] = array();
        $detail_kos['facility'] = array();
        $detail_kos['category_price'] = array();

        // $detail_kos['owner_name'] = "";
        // $detail_kos['owner_phone'] = "";
        // $detail_kos['owner_email'] = "";
        
        
        if (empty($room)) {
            return response()->json(compact('detail_kos'));
        }

        $gallery = DB::table('galleries')
        ->where('kos_id', 'like', $room->id)
        ->get();

        $facility = DB::table('facilities')
        ->where('kos_id', 'like', $room->id)
        ->get();


        $category_price = DB::table('category_price')
        ->where('kos_id', 'like', $room->id)
        ->get();

        
        $my_office = DB::table('my_office')
        ->where('kos_id', 'like', $room->id)
        ->first();

        $detail_kos['id'] = $room->id;
        $detail_kos['name'] = $room->name;
        $detail_kos['address'] = $room->address;
        $detail_kos['description'] = $room->description;
        $detail_kos['latitude'] = $room->latitude;
        $detail_kos['longitude'] = $room->longitude;
        $detail_kos['kos_type'] = $room->kos_type;

        $detail_kos['owner_name'] = $my_office->owner_name;

        $detail_kos['distance'] =  RoomController::getDistance(
            $pens_lat, $room->latitude,
            $pens_long, $room->longitude);
        
        $detail_kos['gallery'] = array();

        foreach ($gallery as $key) {
            $gallery_temp['filename'] = $key->filename;
            array_push($detail_kos['gallery'], $gallery_temp);
        }

        $detail_kos['facility'] = array();

        foreach ($facility as $key) {
            $facility_temp['name'] = $key->name;
            array_push($detail_kos['facility'], $facility_temp);
        }

        $detail_kos['category_price'] = array();

        foreach ($category_price as $key) {
            $temp['name'] = $key->name;
            $temp['price'] = $key->price;
            array_push($detail_kos['category_price'], $temp);
        }

        // $detail_kos['owner_phone'] = $my_office->phone_number;
        // $detail_kos['owner_email'] = $my_office->email;

        return response()->json(compact('detail_kos'));

    }
    
    
}
