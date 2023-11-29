<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineMicroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'wbc',
        'rbc',
        'epithelial_cell',
        'bacteria',
        'mucus_threads'
    ];
}
