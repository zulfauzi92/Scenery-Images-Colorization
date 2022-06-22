<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyOffice extends Model
{
    use HasFactory;
    
    protected $table = 'my_office';
    protected $fillable = [
        'kos_id',
        'owner_name',
        // 'phone_number',
        // 'email',

    ];
    public $timestamps = true;
}
