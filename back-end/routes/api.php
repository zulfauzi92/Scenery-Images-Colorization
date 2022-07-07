<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ColoredController;
use App\Http\Controllers\ColorlessController;
use App\Http\Controllers\ColorizationController;
use App\Http\Controllers\UserController;

// // User Controller
// Route::group(['middleware' => 'jwt.verify'], function(){
//     Route::post('logout', [UserController::class, 'logout']);
//     Route::get('me', [UserController::class, 'getAuthenticatedUser']);
//     Route::post('/editProfile', [UserController::class, 'update']);
// });

// Route::post('/coba', [MyOfficeController::class, 'coba']);

// Route::post('register', [UserController::class, 'register']);
// Route::post('login', [UserController::class, 'login']);

//Colorless Controller
Route::group(['prefix' => 'colorless',   ], function() {
    // Route::get('/read', [ColorlessController::class, 'index']);
    Route::post('/create', [ColorlessController::class, 'store']);
    // Route::post('/update/{id}', [GalleryController::class, 'update']);
    // Route::delete('/delete/{id}', [GalleryController::class, 'destroy']);
});

//Colored Controller
Route::group(['prefix' => 'colored',   ], function() {
    // Route::get('/read', [ColorlessController::class, 'index']);
    Route::post('/create', [ColoredController::class, 'store']);
    // Route::post('/update/{id}', [GalleryController::class, 'update']);
    // Route::delete('/delete/{id}', [GalleryController::class, 'destroy']);
});

//Colorization Controller
Route::group(['prefix' => 'colorization',   ], function() {
    // Route::get('/result', [ColorizationController::class, 'index']);php 
    Route::post('/create', [ColorizationController::class, 'store']);
    // Route::post('/update/{id}', [GalleryController::class, 'update']);
    // Route::delete('/delete/{id}', [GalleryController::class, 'destroy']);
});