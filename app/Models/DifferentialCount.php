<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DifferentialCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'neutrophils',
        'lymphocytes',
        'monocytes',
        'eosinophils',
        'basophils'
    ];
}
