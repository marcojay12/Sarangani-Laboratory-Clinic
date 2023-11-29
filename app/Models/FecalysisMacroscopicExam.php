<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisMacroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'color',
        'consistency'
    ];
}
