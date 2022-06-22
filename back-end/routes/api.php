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
    // Route::post('/create', [GalleryController::class, 'store']);
    // Route::post('/update/{id}', [GalleryController::class, 'update']);
    // Route::delete('/delete/{id}', [GalleryController::class, 'destroy']);
});

// Room Controller
Route::group(['prefix' => 'kos' ], function() {
    Route::get('/', [RoomController::class, 'index']);
    Route::post('/create', [RoomController::class, 'store']);
    Route::get('/{id}', [RoomController::class, 'show']);
    // Route::post('/update/{id}', [MyOfficeController::class, 'update']);
    Route::delete('/delete/{id}', [RoomController::class, 'destroy']);
});

// // Room Function Controller
// Route::group(['prefix' => 'room-function',  'middleware' =>  ['jwt.verify','role.check'] ], function() {
//     Route::get('/read', [RoomFunctionController::class, 'index']);
//     Route::post('/create', [RoomFunctionController::class, 'store']);
//     Route::post('/update/{id}', [RoomFunctionController::class, 'update']);
//     Route::delete('/delete/{id}', [RoomFunctionController::class, 'destroy']);
// });

// // Room Type Controller
// Route::group(['prefix' => 'room-type',  'middleware' =>  ['jwt.verify','role.check'] ], function() {
//     Route::get('/read', [RoomTypeController::class, 'index']);
//     Route::post('/create', [RoomTypeController::class, 'store']);
//     Route::post('/update/{id}', [RoomTypeController::class, 'update']);
//     Route::delete('/delete/{id}', [RoomTypeController::class, 'destroy']);
// });

// Facility Controller
Route::group(['prefix' => 'facility'], function() {
    Route::get('/read', [FacilityController::class, 'index']);
    // Route::post('/create', [FacilityController::class, 'store']);
    // Route::post('/update/{id}', [FacilityController::class, 'update']);
    // Route::delete('/delete/{id}', [FacilityController::class, 'destroy']);
});

// //Common Regulation Controller
// Route::group(['prefix' => 'common-regulations',  'middleware' =>  ['jwt.verify','role.check']], function() {
//     Route::get('/read', [CommonRegulationsController::class, 'index']);
//     Route::post('/create', [CommonRegulationsController::class, 'store']);
//     Route::post('/update/{id}', [CommonRegulationsController::class, 'update']);
//     Route::delete('/delete/{id}', [CommonRegulationsController::class, 'destroy']);
// });

// //foodDrinks Controller
// Route::group(['prefix' => 'food-drinks',  'middleware' =>  ['jwt.verify','role.check']], function() {
//     Route::get('/read', [FoodDrinksController::class, 'index']);
//     Route::post('/create', [FoodDrinksController::class, 'store']);
//     Route::post('/update/{id}', [FoodDrinksController::class, 'update']);
//     Route::delete('/delete/{id}', [FoodDrinksController::class, 'destroy']);
// });

//CategoryPrice Controller
Route::group(['prefix' => 'category-price'], function() {
    Route::get('/read', [CategoryPriceController::class, 'index']);
    // Route::post('/create', [CategoryPriceController::class, 'store']);
    // Route::post('/update/{id}', [CategoryPriceController::class, 'update']);
    // Route::delete('/delete/{id}', [CategoryPriceController::class, 'destroy']);
});

// //OperationalTimes Controller
// Route::group(['prefix' => 'operational-times',  'middleware' =>  ['jwt.verify','role.check'] ], function() {
//     Route::get('/read', [OperationalTimesController::class, 'index']);
//     Route::post('/create', [OperationalTimesController::class, 'store']);
//     Route::post('/update/{id}', [OperationalTimesController::class, 'update']);
//     Route::delete('/delete/{id}', [OperationalTimesController::class, 'destroy']);
// });

// // My Office Controller
// Route::group(['prefix' => 'my-office',  'middleware' =>  ['jwt.verify','role.check'] ], function() {
//     Route::get('/read', [MyOfficeController::class, 'index']);
    // Route::post('/create', [MyOfficeController::class, 'store']);
    // Route::get('/show/{id}', [MyOfficeController::class, 'show']);
    // Route::post('/update/{id}', [MyOfficeController::class, 'update']);
    // Route::delete('/delete/{id}', [MyOfficeController::class, 'destroy']);
// });

// // My Booking user Controller
// Route::group(['prefix' => 'my-booking',  'middleware' =>  ['jwt.verify','user.check'] ], function() {
//     Route::get('/user/approved', [MyBookingController::class, 'approvedList']);
//     Route::get('/user/pending', [MyBookingController::class, 'pendingList']);
//     Route::get('/user/declined', [MyBookingController::class, 'declinedList']);
//     Route::get('/user/invoice/{id}', [MyBookingController::class, 'show']);
//     Route::post('/user/create', [MyBookingController::class, 'store']);
// });

// // My Booking owner Controller
// Route::group(['prefix' => 'my-booking',  'middleware' =>  ['jwt.verify','role.check'] ], function() {
//     Route::get('/owner/booked-room', [MyBookingController::class, 'bookedRoom']);
//     Route::get('/owner/approved-room', [MyBookingController::class, 'approvedRoom']);
//     Route::get('/owner/declined-room', [MyBookingController::class, 'declinedRoom']);
//     Route::post('/owner/change-status', [MyBookingController::class, 'changeStatus']);
//     Route::delete('/owner/delete/{id}', [MyBookingController::class, 'destroy']);
// });