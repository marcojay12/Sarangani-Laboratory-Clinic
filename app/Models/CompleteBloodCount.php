<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompleteBloodCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'hemoglobin',
        'hematocrit',
        'rbc_count',
        'wbc_count'
    ];
    public function complete_blood_count(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
