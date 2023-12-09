<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChemistryExamResult extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'fbs',
        'rbs',
        'creatinine',
        'uric_acid',
        'sgot',
        'sgpt',
        'alkaline_phos',
        'ldh',
        'ggt',
        'magnesium',
        'phosphorus',
        'amylase',
        'remarks'
    ];
    public function chem_exam_results(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
