<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bilirubin extends Model
{
    use HasFactory;
    protected $fillable = [
        'total_bilirubin',
        'direct_bilirubin',
        'indirect_bilirubin'
    ];
}
