<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineChemicalExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'reaction',
        'sp_gravity',
        'glucose',
        'protein'
    ];
}
