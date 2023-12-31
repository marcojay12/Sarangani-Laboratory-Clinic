<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCreatinine extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'urine_volume',
        'serum_creatinine',
        'urine_creatinine',
        'hours_urine_creatinine',
        'creatinine_clearance'
    ];
    public function urine_creatinines(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
