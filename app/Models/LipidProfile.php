<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LipidProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'cholesterol',
        'triglyceride',
        'hdl',
        'ldl'
    ];
}