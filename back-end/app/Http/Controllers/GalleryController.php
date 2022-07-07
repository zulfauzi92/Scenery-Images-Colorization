<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Validator;


class GalleryController extends Controller
{
    public function index(){

        // $user = JWTAuth::parseToken()->authenticate();

        $gallery = DB::table('galleries')
        ->get();

        $gallery_temp = DB::table('galleries')
        ->first();

        if (empty($gallery_temp)) {
            $status = "Data does'nt exist";
        } else {
            $status = "Data exist";
        }

        return response()->json(compact('gallery', 'status'));

    }

    public function store(Request $request)
    {
        // $user = JWTAuth::parseToken()->authenticate();
        
        // $request->validate([
        //     'room_id' => 'required'
        // ]);

        if($request->hasFile('filename')) {
            
            $validator = Validator::make($request->all(), [
                'filename' => 'required|image'
            ]);

            if($validator->fails()){
                return response()->json(['status' => $validator->errors()->toJson()], 400);
            }

            $file = $request->file('filename');
            $filename = 'colorization/' . 'up-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/', $filename);

        }

        $gallery = Gallery::create([
            'filename' => $filename
        ]);

        $status = "Data created succesfully";

        return response()->json(compact('gallery', 'status'));
    }

    // public function show($id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $currentGallery = DB::table('galleries')
    //     ->where('user_id', '=', $user)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($currentGallery)){
    //         return response()->json([ 'status' => "Data doesn't exist"]);

    //     } 

    //     $status = 'Data exist';

    //     return response()->json(compact('currentGallery', 'status'));

    // }

    // public function update(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $currentGallery = DB::table('galleries')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($currentGallery)){

    //         return response()->json([ 'status' => "Data doesn't exist"]);

    //     } 

    //     if($request->hasFile('filename')==NULL){
            
    //         $filename = $currentGallery->filename;

    //     } else{

    //         $validator = Validator::make($request->all(), [
    //             'filename' => 'required|image|mimes:png,jpeg,jpg'
    //         ]);

    //         if($validator->fails()){
    //             return response()->json(['status' => $validator->errors()->toJson()], 400);
    //         }

    //         $file = $request->file('filename');
    //         $filename = 'otakkanan/gallery/' . $user->name .'/' . 'gl-' . time() . '.' . $file->getClientOriginalExtension();
    //         $file->storeAs('public/', $filename);
    //         Storage::delete('public/' . $currentGallery->filename);

    //     }

    //     $currentGallery_temp = Gallery::find($currentGallery->id);
        
    //     $currentGallery_temp->update([
    //         'filename' => $filename
    //     ]);

    //     return response()->json(['status' => "Update successfully"]);

    // }

    // public function destroy(Request $request, $id)
    // {
    //     $user = JWTAuth::parseToken()->authenticate();

    //     $currentGallery = DB::table('galleries')
    //     ->where('user_id', '=', $user->id)
    //     ->where('id', '=', $id)
    //     ->first();

    //     if(empty($currentGallery)){
        
    //         return response()->json([ 'status' => "Data doesn't exist"]);
        
    //     } else {
            
    //         Storage::delete('public/' . $currentGallery->filename);

    //         $currentGallery_temp = Gallery::find($currentGallery->id);
    //         $currentGallery_temp->delete();
            
    //         return response()->json([ 'status' => "Data Successfully Deleted"]);
        
    //     }
    // }
}
