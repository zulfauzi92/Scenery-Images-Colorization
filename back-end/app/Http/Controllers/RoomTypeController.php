<?php

namespace App\Http\Controllers;

use App\Models\RoomType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JWTAuth;

class RoomTypeController extends Controller
{
   
    // public function index()
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $roomTypes = DB::table('room_types')
    //     ->where('user_id', '=', $user->id)
    //     ->get();

    //     $roomTypes_temp = DB::table('room_types')
    //     ->where('user_id', '=', $user->id)
    //     ->first();

    //     if(empty($roomTypes_temp)) {

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }

    //     $status = "Data Exist";

    //     return response()->json(compact('roomTypes', 'status'));
        
    // }

    
    // public function store(Request $request)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $this->validate($request,[
    //         'room_id' => 'required',
    //         'name' => 'required|string',
    //         'capacity' => 'required|integer',
    //     ]);

    //     if($request->hasFile('layout')) {
            
    //         $validator = Validator::make($request->all(), [
    //             'layout' => 'required|image|mimes:png,jpeg,jpg'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }

    //         $file = $request->file('layout');
    //         $layout = 'otakkanan/gallery/' . $user->name . '/' . 'ly-' . time() . '.' . $file->getClientOriginalExtension();
    //         $file->storeAs('public/', $layout);
    //     }

    //     $roomType = RoomType::create([
    //         'room_id' => $request->get('room_id'),
    //         'user_id' => $user->id,
    //         'name' => $request->get('name'),
    //         'capacity' => $request->get('capacity'),
    //         'layout' => $layout
    //     ]);
        
    //     $status = "Data created successfully";

    //     return response()->json(compact('roomType', 'status'));
    // }

   
    // public function show($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $roomType = DB::table('room_types')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();
        
    //     if (empty($roomType)) {

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     } else {

    //         $status = "Showed successfully";
    //         return response()->json(compact('roomType', 'status'));
    //     }
    // }

 
    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $roomType = DB::table('room_types')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($roomType)){

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }


    //     if($request->get('name')==NULL){

    //         $name = $roomType->name;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'name' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $name = $request->get('name');

    //     }

    //     if($request->get('capacity')==NULL){

    //         $capacity = $roomType->capacity;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'capacity' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $capacity = $request->get('capacity');

    //     }

    //     if($request->get('layout')==NULL){

    //         $layout = $roomType->layout;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'layout' => 'required|image|mimes:png,jpeg,jpg'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }

    //         $file = $request->file('layout');
    //         $layout = 'otakkanan/gallery/' . $user->name .'/' . 'ly-'. time() . '.' . $file->getClientOriginalExtension();
    //         $file->storeAs('public/', $layout);
    //         Storage::delete('public/' . $roomType->layout);

    //     }

    //     $roomType_temp = RoomType::find($roomType->id);
        
    //     $roomType_temp->update([
    //         'name' => $name,
    //         'capicity' => $capacity,
    //         'layout' => $layout
    //     ]);

    //     return response()->json(['status' => "Update successfully"]);

    // }

    // public function destroy($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
    //     $roomType = DB::table('room_types')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($roomType)){

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }
        
    //     $roomType_temp = RoomType::find($roomType->id);
    //     Storage::delete('public/' . $roomType_temp->layout);
    //     $roomType_temp->delete();

    //     return response()->json(['status' => "Delete successfully"]);
    // }
}
