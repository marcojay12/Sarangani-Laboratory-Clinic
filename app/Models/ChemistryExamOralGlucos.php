<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChemistryExamOralGlucos extends Model
{
    use HasFactory;
    protected $fillable = [
        'glucose_load',
        'glucose_result',
        'remarks'
    ];
    public function chem_oral_glucos(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
