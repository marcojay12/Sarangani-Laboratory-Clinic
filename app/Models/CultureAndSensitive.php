<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CultureAndSensitive extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'speciment_type',
        'source_of_speciment',
        'result',
        'remarks'
    ];

    public function chem_culture_sensitive(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
