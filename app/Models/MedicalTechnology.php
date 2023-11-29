<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalTechnology extends Model
{
    use HasFactory;
    protected $fillable = [
        'mt_name',
        'mt_license_number'
    ];
}
