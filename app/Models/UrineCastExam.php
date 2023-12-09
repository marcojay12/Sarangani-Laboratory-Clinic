<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCastExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'hyaline_cast',
        'wbc_cast',
        'rbc_cast',
        'granular_cast'
    ];
    public function urine_cast(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
