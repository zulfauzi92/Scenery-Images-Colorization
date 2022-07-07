<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Colored;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Validator;

class ColoredController extends Controller
{
    public function store(Request $request)
    {
        // $user = JWTAuth::parseToken()->authenticate();
        
        // $request->validate([
        //     'room_id' => 'required'
        // ]);

        if($request->hasFile('colored_link')) {
            
            $validator = Validator::make($request->all(), [
                'colored_link' => 'required|image'
            ]);

            if($validator->fails()){
                $status =  $validator->errors()->toJson();
            }

            $file = $request->file('colored_link');
            $filename = 'colored/' . 'up-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/', $filename);

        }

        $colored = Colored::create([
            'colored_link' => $filename
        ]);

        $status = "Data created succesfully";

        return response()->json(compact('colored', 'status'));
    }
}
