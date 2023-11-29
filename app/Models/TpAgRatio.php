<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TpAgRatio extends Model
{
    use HasFactory;
    protected $fillable = [
        'total_protein',
        'albumin',
        'globulin',
        'ag_ratio'
    ];
}
