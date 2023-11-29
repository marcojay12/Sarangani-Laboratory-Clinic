<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineGlucose extends Model
{
    use HasFactory;
    protected $fillable = [
        'fasting',
        'first_hour',
        'second_hour',
        'third_hour'
    ];
}
