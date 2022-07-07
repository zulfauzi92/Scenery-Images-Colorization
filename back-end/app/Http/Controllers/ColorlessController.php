<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Colorless;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Validator;

class ColorlessController extends Controller
{
    public function store(Request $request)
    {
        // $user = JWTAuth::parseToken()->authenticate();
        
        // $request->validate([
        //     'room_id' => 'required'
        // ]);

        if($request->hasFile('colorless_link')) {
            
            $validator = Validator::make($request->all(), [
                'colorless_link' => 'required|image'
            ]);

            if($validator->fails()){
                return response()->json(['status' => $validator->errors()->toJson()], 400);
            }

            $file = $request->file('filename');
            $filename = 'colorless/' . 'up-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/', $filename);

        }

        $colorless = Colorless::create([
            'colorless_link' => $filename
        ]);

        $status = "Data created succesfully";

        return response()->json(compact('colorless', 'status'));
    }
}
