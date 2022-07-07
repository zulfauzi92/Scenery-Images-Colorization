<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colored extends Model
{
    use HasFactory;
    protected $table = 'colored';
    protected $fillable = [
        'colored_link'
    ];
    public $timestamps = true;
}
