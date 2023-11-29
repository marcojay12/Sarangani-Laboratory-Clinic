<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyExamTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'hbsag',
        'anti_hbs',
        'anti_hcv',
        'syphilis',
        'aso',
        'ra_rf',
        'crp',
        'troponin',
        'remarks'
    ];
}
