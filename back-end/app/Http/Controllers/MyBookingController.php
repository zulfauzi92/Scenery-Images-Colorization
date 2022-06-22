<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\MyBooking;
use App\Models\Users;
use App\Models\CategoryPrice;
use App\Models\MyOffice;
use JWTAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class MyBookingController extends Controller
{
    //user
    // public function pendingList() 
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $pending_list = array();

    //     $bookingList1 = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'pending')
    //     ->first();

    //     if (empty($bookingList1)) {
    //         return response()->json(compact('pending_list')); 
    //     }

    //     $bookingList = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'pending')
    //     ->orderBy('updated_at', 'desc')
    //     ->get();

        

    //     foreach ($bookingList as $key) {
    //         $my_office = DB::table('my_office')
    //         ->where('room_id', '=', $key->room_id)
    //         ->first();
    //         $owner = Users::find($my_office->user_id);
    //         $room = Room::find($my_office->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["owner"] = $owner->name;
    //         $temp["phone_owner"] = $owner->phone_number;

    //         array_push($pending_list, $temp);

    //     }

        

    //     return response()->json(compact('pending_list')); 

    // }

    // //user
    // public function approvedList() 
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $approved_list = array();

    //     $bookingList1 = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'approved')
    //     ->first();

    //     if (empty($bookingList1)) {
    //         return response()->json(compact('approved_list'));  
    //     }

    //     $bookingList = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'approved')
    //     ->orderBy('updated_at', 'desc')
    //     ->get();

       

    //     foreach ($bookingList as $key) {
    //         $my_office = DB::table('my_office')
    //         ->where('room_id', '=', $key->room_id)
    //         ->first();
    //         $owner = Users::find($my_office->user_id);
    //         $room = Room::find($my_office->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["owner"] = $owner->name;
    //         $temp["phone_owner"] = $owner->phone_number;

    //         array_push($approved_list, $temp);

    //     }

        

    //     return response()->json(compact('approved_list')); 
    // }

    //  //user
    //  public function declinedList() 
    //  {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $declined_list = array();

    //     $bookingList1 = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'declined')
    //     ->orderBy('updated_at', 'desc')
    //     ->first();

    //     if (empty($bookingList1)) {
    //         return response()->json(compact('declined_list')); 
    //     }

    //     $bookingList = DB::table('my_booking')
    //     ->where('user_id', 'like', $user->id)
    //     ->where('status', 'like', 'declined')
    //     ->get();

        

    //     foreach ($bookingList as $key) {
    //         $my_office = DB::table('my_office')
    //         ->where('room_id', '=', $key->room_id)
    //         ->first();
    //         $owner = Users::find($my_office->user_id);
    //         $room = Room::find($my_office->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["owner"] = $owner->name;
    //         $temp["phone_owner"] = $owner->phone_number;

    //         array_push($declined_list, $temp);

    //     }

        

    //     return response()->json(compact('declined_list')); 
    //  }

    // //user
    // public function show($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $my_booking = DB::table('my_booking')
    //     ->where('id', '=', $id)
    //     ->where('user_id', '=', $user->id)
    //     ->where('status', '=', 'approved')
    //     ->first();

    //     if (empty($my_booking)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $room = Room::find($my_booking->room_id);

    //     if (empty($room)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $my_office =  DB::table('my_office')
    //     ->where('room_id', '=', $room->id)
    //     ->first();

    //     if (empty($my_office)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $unit_price = CategoryPrice::find($my_booking->category_price_id);

    //     $owner = Users::find($my_office->user_id);


    //     if (empty($owner)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $detail_booking['booking_id'] = $my_booking->id;
    //     $detail_booking['customer_name'] = $user->name;
    //     $detail_booking['customer_address'] = $user->address;
    //     $detail_booking['customer_email'] = $user->email;
    //     $detail_booking['customer_phone'] = $user->phone_number;
    //     $detail_booking['customer_image'] = $user->image;
    //     $detail_booking['owner_name'] = $owner->name;
    //     $detail_booking['owner_address'] = $owner->address;
    //     $detail_booking['owner_email'] = $owner->email;
    //     $detail_booking['owner_phone'] = $owner->phone_number;
    //     $detail_booking['owner_image'] = $owner->image;
    //     $detail_booking['room_name'] = $room->name;
    //     $detail_booking['room_address'] = $room->address;
    //     $detail_booking['price_type'] = $unit_price->name;
    //     $detail_booking['price'] = $unit_price->price;
    //     $detail_booking['booking_date'] = $my_booking->starting_date;
    //     $detail_booking['booking_time'] = $my_booking->starting_time;
    //     $detail_booking['quantity'] = $my_booking->quantity;
    //     $detail_booking['total_price'] = $my_booking->total_price;
    //     $detail_booking['status'] = $my_booking->status;
        
    //     return response()->json($detail_booking); 

    // }

    // //user
    // public function store(Request $request) 
    // {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $validator = Validator::make($request->all(), [
    //         'room_id' => 'required|integer',
    //         'category_price_id' => 'required|integer',
    //         'starting_date' => 'required|date',
    //         'starting_time' => 'required',
    //         'quantity' => 'required|integer'
    //     ]);

    //     if($validator->fails()){
    //         return response()->json(['status' => $validator->errors()->toJson()], 400);
    //     }

    //     $quantity = $request->get('quantity');

    //     $category_price_id = $request->get('category_price_id');

    //     $check = DB::table('room_category_price')
    //     ->where('room_id', '=', $request->get('room_id'))
    //     ->where('category_price_id', '=', $category_price_id)
    //     ->first();

    //     if (empty($check)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $category_price = CategoryPrice::find($category_price_id);

    //     $total_price = $category_price->price * $quantity;

    //     $my_booking = MyBooking::create([
    //         'user_id' => $user->id,
    //         'room_id' => $request->get('room_id'),
    //         'category_price_id' => $category_price_id,
    //         'starting_date' => $request->get('starting_date'),
    //         'starting_time'=>$request->get('starting_time'),
    //         'quantity' => $quantity,
    //         'total_price' => $total_price,
    //         'status'=>'pending',
    //     ]);

       
    //     $status = "create is success";

    //     return response()->json(compact('my_booking', 'status'));
    // }

    // //owner
    // public function destroy($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
        
    //     $my_booking = DB::table('my_booking')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if (empty($my_booking)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     }

    //     $my_booking->delete();

    //     return response()->json([ 'status' => "Delete Success"]); 
    // }

    // //owner
    // public function changeStatus(Request $request)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $id = $request->get("booking_id");

    //     $my_booking_temp = DB::table('my_booking')
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($my_booking_temp)) {
    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     $my_office_temp = DB::table('my_office')
    //     ->where('room_id', '=', $my_booking_temp->room_id)
    //     ->where('user_id', '=', $user->id)
    //     ->first();

    //     if(empty($my_office_temp)) {
    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     } else {
    //         $my_booking = MyBooking::find($my_booking_temp->id);

    //         if (empty($my_booking)) {
                
    //             return response()->json([ 'status' => "Data doesn't exist"]); 

    //         } 

    //         $status = $request->get('status');
            
    //         if($status==NULL){

    //             $status = $my_booking->status;

    //         } else { 

    //             $validator = Validator::make($request->all(), [
    //                 'status' => 'required|string|max:255'
    //             ]);

    //             if($validator->fails()){
    //                 return response()->json(['status' => $validator->errors()->toJson()], 400);
    //             }
                
    //             $my_booking->update([
    //                 'status' => $status
    //             ]);
                
    //         }

            

    //         return response()->json([ 'status' => "Update successfully"]);
    //     }
    // }

    // //owner
    // public function bookedRoom() 
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $owner_booked = array();

    //     $my_office = DB::table('my_office')
    //     ->where('user_id', 'like', $user->id)
    //     ->orderBy('updated_at', 'desc')
    //     ->get();

    //     foreach ($my_office as $key) {
    //         $my_booking = DB::table('my_booking')
    //         ->where('room_id', 'like', $key->room_id)
    //         ->where('status', 'like', 'pending')
    //         ->get();

    //         foreach ($my_booking as $key2) {
    //             array_push($owner_booked, $key2);
    //         }

    //     }

    //     $pending_list = array();

    //     foreach ($owner_booked as $key) {
            
    //         $customer = Users::find($key->user_id);
    //         $room = Room::find($key->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["customer"] = $customer->name;
    //         $temp["phone_customer"] = $customer->phone_number;

    //         array_push($pending_list, $temp);

    //     }

        

    //     return response()->json(compact('pending_list'));

    // }

    // public function approvedRoom() 
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $owner_booked = array();

    //     $my_office = DB::table('my_office')
    //     ->where('user_id', 'like', $user->id)
    //     ->orderBy('updated_at', 'desc')
    //     ->get();

    //     foreach ($my_office as $key) {
    //         $my_booking = DB::table('my_booking')
    //         ->where('room_id', 'like', $key->room_id)
    //         ->where('status', 'like', 'approved')
    //         ->get();

    //         foreach ($my_booking as $key2) {
    //             array_push($owner_booked, $key2);
    //         }

    //     }

    //     $approved_list = array();

    //     foreach ($owner_booked as $key) {
            
    //         $customer = Users::find($key->user_id);
    //         $room = Room::find($key->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["customer"] = $customer->name;
    //         $temp["phone_customer"] = $customer->phone_number;

    //         array_push($approved_list, $temp);

    //     }

        

    //     return response()->json(compact('approved_list'));

    // }

    // public function declinedRoom() 
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $owner_booked = array();

    //     $my_office = DB::table('my_office')
    //     ->where('user_id', 'like', $user->id)
    //     ->orderBy('updated_at', 'desc')
    //     ->get();

    //     foreach ($my_office as $key) {
    //         $my_booking = DB::table('my_booking')
    //         ->where('room_id', 'like', $key->room_id)
    //         ->where('status', 'like', 'declined')
    //         ->get();

    //         foreach ($my_booking as $key2) {
    //             array_push($owner_booked, $key2);
    //         }

    //     }

    //     $declined_list = array();

    //     foreach ($owner_booked as $key) {
            
    //         $customer = Users::find($key->user_id);
    //         $room = Room::find($key->room_id);
    //         $price = CategoryPrice::find($key->category_price_id);

    //         $temp["booking_id"] = $key->id;
    //         $temp["room_name"] = $room->name;
    //         $temp["status"] = $key->status;
    //         $temp["address"] = $room->address;
    //         $temp["booking_date"] = $key->starting_date;
    //         $temp["starting_time"] = $key->starting_time;
    //         $temp["price_type"] = $price->name;
    //         $temp["unit_price"] = $price->price;
    //         $temp["quantity"] = $key->quantity;
    //         $temp["total_price"] = $key->total_price;
    //         $temp["customer"] = $customer->name;
    //         $temp["phone_customer"] = $customer->phone_number;

    //         array_push($declined_list, $temp);

    //     }

        

    //     return response()->json(compact('declined_list'));

    // }

}
