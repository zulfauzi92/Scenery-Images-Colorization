<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Colorization;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Validator;

class ColorizationController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'colorless_id' => 'required|integer',
            'colored_id' => 'required|integer'
        ]);

        if($validator->fails()){
            $status =  $validator->errors()->toJson();
        }

        $colorization = Colorization::create([
            'colorless_id' => $request->get('colorless_id'),
            'colored_id' => $request->get('colored_id'),
        ]);

        $status = "Data created succesfully";

        return response()->json(compact('colorization', 'status'));

    }
}
