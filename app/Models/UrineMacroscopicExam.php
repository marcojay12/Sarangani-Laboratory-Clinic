<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineMacroscopicExam extends Model
{
    use HasFactory;
     protected $fillable = [
        'patient_information_id',
        'color',
        'transparency'
    ];
    public function urine_macroscopic(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
