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

    public function index(){
        
        $temp = Colorization::all();
        
        $results = array();

        foreach ($temp as $key) {
            $colored = DB::table('colored')
            ->where('id', 'like', $key->colored_id)
            ->first();

            $colorless = DB::table('colorless')
            ->where('id', 'like', $key->colorless_id)
            ->first();

            $union['colorless_id'] = $colorless->id;
            $union['colorless_link'] = $colorless->colorless_link;
            $union['colored_id'] = $colored->id;
            $union['colored_link'] = $colored->colored_link;

            array_push($results, $union);

        
        }

        return response()->json(compact('results'));

    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'colorless_id' => 'required',
            'colored_id' => 'required'
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
