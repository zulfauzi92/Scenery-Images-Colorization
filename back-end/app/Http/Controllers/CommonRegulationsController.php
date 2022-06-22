<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CommonRegulations;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Validator;

class CommonRegulationsController extends Controller
{

    // public function index() {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $common_regulations = DB::table('common_regulations')
    //     ->where('user_id', '=', $user->id)
    //     ->get();

    //     $common_regulations_temp = DB::table('common_regulations')
    //     ->where('user_id', '=', $user->id)
    //     ->first();

    //     if (empty($common_regulations_temp)) {
    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     $status = "Data exist";

    //     return response()->json(compact('common_regulations', 'status'));

    // }

    // public function store(Request $request) {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $this->validate($request,[
    //         'room_id' => 'required',
    //         'name' => 'required|string|max:255'
    //     ]);

    //     try {

    //         $common_regulations = CommonRegulations::create([
    //             'room_id' => $request->get('room_id'),
    //             'user_id' => $user->id,
    //             'name' => $request->get('name')
    //         ]);
    //     }
    //     catch(\Exception $e){
    //         return response()->json(['status'=>$e->getMessage()]);
    //     }

    //     $status = "Data created successfully";
        
    //     return response()->json(compact('common_regulations', 'status'));

    // }

    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $common_regulations = DB::table('common_regulations')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($common_regulations)){

    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     if($request->get('name')==NULL){

    //         $name = $common_regulations->name;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'name' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $name = $request->get('name');

    //     }
    //     $room_id = $common_regulations->room_id;
    //     $common_regulations_temp = CommonRegulations::find($common_regulations->id);
    //     $common_regulations_temp->update([
    //         'name' => $name,
    //     ]);

    //     return response()->json([ 'status' => "Update successfully"]); 
    // }

    // public function destroy($id) {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $common_regulations = DB::table('common_regulations')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($common_regulations)){

    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     $common_regulations->delete();

    //     return response()->json([ 'status' => "Delete successfully"]); 

    // }

}
