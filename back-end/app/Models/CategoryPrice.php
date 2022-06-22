<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPrice extends Model
{
    use HasFactory;
    
    protected $table = 'category_price';
    protected $fillable = [
        'kos_id',
        'name',
        'price'
    ];
    public $timestamps = true;
    
}
