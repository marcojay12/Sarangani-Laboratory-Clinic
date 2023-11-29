<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CovidRapidTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'type_of_specimen',
        'test_kit_brand',
        'method_test',
        'result',
        'value_test',
        'remarks'
    ];
}
