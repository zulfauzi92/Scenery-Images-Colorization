<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Validator;

class FacilityController extends Controller
{
    
    public function index()
    {
        // $user = JWTAuth::parseToken()->authenticate();

        $facilities = DB::table('facilities')
        ->get();

        $facilities_temp = DB::table('facilities')
        ->first();

        if (empty($facilities_temp)) {
            $status = "Data does'nt exist"; 
        } else {
            $status = "Data exist";
        }

        return response()->json(compact('facilities', 'status'));
    }

    
    // public function store(Request $request)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $this->validate($request,[
    //         'room_id' => 'required',
    //         'name' => 'required',
    //         'status' => 'required'
    //     ]);

    //     try{
    //         $facility = Facility::create([
    //             'room_id' => $request->get('room_id'),
    //             'user_id' => $user->id,
    //             'name' => $request->get('name'),
    //             'status' => $request->get('status')
    //         ]);

    //     }
    //     catch(\Exception $e){
    //         return response()->json(['status'=>$e->getMessage()]);
    //     }

    //     $status = "Data created successfully";
        
    //     return response()->json(compact('facility', 'status'));
    // }

    
    // public function show($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $facility = DB::table('facilities')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();
        
    //     if (empty($facility)) {
    //         return response()->json([ 'status' => "Data Not Found"]); 
    //     } else {
    //         return response()->json(compact('facility'));
    //     }
    // }

    
    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $facility = DB::table('facilities')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if (empty($facility)) {
            
    //         return response()->json([ 'status' => "Data doesn't exist"]); 

    //     } 
        
    //     if($request->get('name')==NULL){

    //         $name = $facility->name;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'name' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $name = $request->get('name');

    //     }

    //     if($request->get('status')==NULL){

    //         $status = $facility->status;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'status' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $status = $request->get('status');

    //     }
        
    //     $facility_temp = Facility::find($facility->id);

    //     $facility_temp->update([
    //         'name' => $name,
    //         'status' => $status
    //     ]);

    //     return response()->json([ 'status' => "Update successfully"]);
        
    // }

    
    // public function destroy($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $facility = DB::table('facilities')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if (empty($facility)) {

    //         return response()->json([ 'status' => "Data doesn't exist"]);
    //     }

    //     $facility->delete();

    //     return response()->json([ 'status' => "Data Successfully Deleted"]);
        
    // }
}
