<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrossMatchingExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
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
    public function cross_match_exam(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
