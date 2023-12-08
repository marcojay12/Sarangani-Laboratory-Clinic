<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyTyphoidTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'ig_g',
        'ig_m'
    ];
    public function typhoid_test(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
