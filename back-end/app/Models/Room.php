<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $table = 'kos';
    protected $fillable = [
        'name',
        'description',
        'address',
        'latitude',
        'longitude',
        'kos_type'
    ];
    public $timestamps = true;
}
