<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisFEIAResult extends Model
{
    use HasFactory;
    protected $fillable = [
        'fluorescence_enzyme',
        'cardiac_markers',
        'troponin',
        'ck_mb',
        'remarks'
    ];
}
