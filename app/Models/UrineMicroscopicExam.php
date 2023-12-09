<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineMicroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'wbc',
        'rbc',
        'epithelial_cell',
        'bacteria',
        'mucus_threads'
    ];
    public function urine_microscopic(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
