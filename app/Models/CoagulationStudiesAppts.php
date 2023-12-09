<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoagulationStudiesAppts extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'ptt',
        'control',
        'ratio'
    ];
    public function coagulations_appts(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
