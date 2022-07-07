<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colorless extends Model
{
    use HasFactory;
    protected $table = 'colorless';
    protected $fillable = [
        'colorless_link'
    ];
    public $timestamps = true;
}
