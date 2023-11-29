<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologySensitiveExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'sensitive',
        'resistant',
        'intermediate'
    ];
}
