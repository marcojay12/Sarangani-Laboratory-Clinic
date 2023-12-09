<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisMicroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'rbc',
        'wbc',
        'fat_globules',
        'yeast_cells'
    ];
    public function fecalysis_micro_exam(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
