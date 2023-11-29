<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCastExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'hyaline_cast',
        'wbc_cast',
        'rbc_cast',
        'granular_cast'
    ];
}
