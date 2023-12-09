<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodGlucose extends Model
{
    use HasFactory;
    protected $table = 'blood_glucoses';

    protected $fillable = [
        'patient_information_id',
        'fbs',
        'first_hour',
        'second_hour',
        'third_hour'
    ];
    public function bloodglocoses(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
