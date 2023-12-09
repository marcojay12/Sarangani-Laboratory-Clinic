<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisMacroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'color',
        'consistency'
    ];
    public function fecalysis_macro_exam(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
