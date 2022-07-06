<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\RoomFunctionController;
use App\Http\Controllers\RoomTypeController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommonRegulationsController;
use App\Http\Controllers\FoodDrinksController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\OperationalTimesController;
use App\Http\Controllers\CategoryPriceController;
use App\Http\Controllers\MyOfficeController;
use App\Http\Controllers\MyBookingController;

// // User Controller
// Route::group(['middleware' => 'jwt.verify'], function(){
//     Route::post('logout', [UserController::class, 'logout']);
//     Route::get('me', [UserController::class, 'getAuthenticatedUser']);
//     Route::post('/editProfile', [UserController::class, 'update']);
// });

// Route::post('/coba', [MyOfficeController::class, 'coba']);

// Route::post('register', [UserController::class, 'register']);
// Route::post('login', [UserController::class, 'login']);

//Galery Controller
Route::group(['prefix' => 'gallery',   ], function() {
    Route::get('/read', [GalleryController::class, 'index']);
    Route::post('/create', [GalleryController::class, 'store']);
    // Route::post('/update/{id}', [GalleryController::class, 'update']);
    // Route::delete('/delete/{id}', [GalleryController::class, 'destroy']);
});
