<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyTyphoidTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'ig_g',
        'ig_m'
    ];
}
