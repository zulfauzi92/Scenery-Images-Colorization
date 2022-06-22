<?php

namespace App\Http\Controllers;

use App\Models\RoomFunction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Validator;

class RoomFunctionController extends Controller
{
    
    // public function index()
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $roomFunctions = DB::table('room_functions')
    //     ->where('user_id', '=', $user->id)
    //     ->get();

    //     $roomFunctions_temp = DB::table('room_functions')
    //     ->where('user_id', '=', $user->id)
    //     ->first();

    //     if(empty($roomFunctions_temp)) {

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }

    //     $status = "Data Exist";

    //     return response()->json(compact('roomFunctions', 'status'));
    // }

    
    // public function store(Request $request)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $this->validate($request,[
    //         'room_id' => 'required',
    //         'name' => 'required'
    //     ]);

    //     $roomFunction = RoomFunction::create([
    //         'room_id' => $request->get('room_id'),
    //         'user_id' => $user->id,
    //         'name' => $request->get('name')
    //     ]);
        
    //     $status = "Data created successfully";

    //     return response()->json(compact('roomFunction', 'status'));

    // }

    
    // public function show($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $roomFunction = DB::table('room_functions')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();
        
    //     if (empty($roomFunction)) {

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     } else {

    //         $status = "Showed successfully";
    //         return response()->json(compact('roomFunction', 'status'));
    //     }
    // }


    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();
        
    //     $roomFunction = DB::table('room_functions')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($roomFunction)){

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }

    //     if($request->get('name')==NULL){

    //         $name = $roomFunction->name;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'name' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $name = $request->get('name');

    //     }

    //     $roomFunction_temp = RoomFunction::find($roomFunction->id);
        
    //     $roomFunction_temp->update([
    //         'name' => $name
    //     ]);
        
    //     return response()->json(['status' => "Update successfully"]);
    // }

    
    // public function destroy($id)
    // {        
    //     $user = JWTAuth::parseToken()->authenticate();
        
    //     $roomFunction = DB::table('room_functions')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();


    //     if(empty($roomFunction)){

    //         return response()->json(['status' => "Data Doesn't exist"]);
    //     }

    //     $roomFunction_temp = RoomFunction::find($roomFunction->id);
    //     $roomFunction_temp->delete();

    //     return response()->json(['status' => "Delete successfully"]);
    // }
}
