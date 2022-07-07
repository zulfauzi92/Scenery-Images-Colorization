<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colorization extends Model
{
    use HasFactory;
    protected $table = 'colorization';
    protected $fillable = [
        'colorless_id',
        'colored_id'
    ];
    public $timestamps = true;
}
