<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrossMatchingExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'blood_type',
        'method_test',
        'serial_number',
        'donor_blood_type',
        'source',
        'component',
        'content',
        'extract_date',
        'expiry_date',
        'crossmatching_result',
        'others'

    ];
}
