<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CultureAndSensitive extends Model
{
    use HasFactory;
    protected $fillable = [
        'laboratory_codes_id',
        'speciment_type',
        'source_of_speciment',
        'result',
        'remarks'
    ];
}
