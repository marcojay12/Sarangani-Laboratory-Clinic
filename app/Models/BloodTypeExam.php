<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodTypeExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'blood_typing',
        'remarks'
    ];
}
