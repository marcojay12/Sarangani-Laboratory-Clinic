<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoagulationStudiesProtime extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'pt',
        'control',
        'activity',
        'inr'
    ];
    public function coagulations_protimes(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
