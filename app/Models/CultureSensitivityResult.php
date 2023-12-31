<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CultureSensitivityResult extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'specimen_type',
        'source_of_specimen',
        'result',
        'culture_isolate'
    ];
    public function micro_culture_sensitive(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }

}
