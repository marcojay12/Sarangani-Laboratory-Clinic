<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineMacroscopicExam extends Model
{
    use HasFactory;
     protected $fillable = [
        'color',
        'transparency'
    ];
}
