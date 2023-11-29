<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCreatinine extends Model
{
    use HasFactory;
    protected $fillable = [
        'urine_volume',
        'serum_creatinine',
        'urine_creatinine',
        'hours_urine_creatinine',
        'creatinine_clearance'
    ];
}
