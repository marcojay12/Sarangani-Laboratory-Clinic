<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChemistryExamResult extends Model
{
    use HasFactory;
    protected $fillable = [
        'fbs',
        'rbs',
        'creatinine',
        'uric_acid',
        'sgot',
        'sgpt',
        'alkaline_phos',
        'ldh',
        'ggt',
        'magnesium',
        'phosphorus',
        'amylase',
        'remarks',
    ];
}
