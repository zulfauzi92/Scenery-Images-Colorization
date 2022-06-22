<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FoodDrinks;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Validator;

class FoodDrinksController extends Controller
{
    // public function index() {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $food_drinks = DB::table('food_drinks')
    //     ->where('user_id', '=', $user->id)
    //     ->get();

    //     $food_drinks_temp = DB::table('food_drinks')
    //     ->where('user_id', '=', $user->id)
    //     ->first();

    //     if (empty($food_drinks_temp)) {
    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     $status = "Data exist";

    //     return response()->json(compact('food_drinks', 'status'));

    // }

    // public function store(Request $request) {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $this->validate($request,[
    //         'room_id' => 'required',
    //         'name' => 'required|string|max:255',
    //         'description' => 'required|string|max:255',
    //         'price' => 'required'
    //     ]);

    //     try {

    //         $food_drinks = FoodDrinks::create([
    //             'room_id' => $request->get('room_id'),
    //             'user_id' => $user->id,
    //             'name' => $request->get('name'),
    //             'description' => $request->get('description'),
    //             'price' => $request->get('price')
    //         ]);

    //     }
    //     catch(\Exception $e){
    //         return response()->json(['status'=>$e->getMessage()]);
    //     }

    //     $status = "Data created succesfully";
        
    //     return response()->json(compact('food_drinks', 'status'));

    // }

    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $food_drinks = DB::table('food_drinks')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($food_drinks)){

    //         return response()->json([ 'status' => "Data doesn't exist"]); 
    //     }

    //     if($request->get('name')==NULL){

    //         $name = $food_drinks->name;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'name' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $name = $request->get('name');

    //     }

    //     if($request->get('description')==NULL){

    //         $description = $food_drinks->description;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'description' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $description = $request->get('description');

    //     }

    //     if($request->get('price')==NULL){

    //         $price = $food_drinks->price;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'price' => 'required|string|max:255'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }
    //         $price = $request->get('price');

    //     }

    //     $food_drinks_temp = FoodDrinks::find($food_drinks->id);
    //     $food_drinks_temp->update([
    //         'name' => $name,
    //         'description' => $description,
    //         'price' => $price
    //     ]);

    //     return response()->json([ 'status' => "Update successfully"]);

    // }

    // public function destroy($id) {

    //     $user = JWTAuth::parseToken()->authenticate();

    //     $food_drinks = DB::table('food_drinks')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($food_drinks)){

    //         return response()->json([ 'status' => "Data doesn't exist"]);
    //     }

    //     $food_drinks_temp = FoodDrinks::find($food_drinks->id);
    //     $food_drinks_temp->delete();

    //     return response()->json([ 'status' => "Delete successfully"]);

    // }

}
