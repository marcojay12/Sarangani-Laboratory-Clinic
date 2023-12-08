<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisOccultBlood extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecal_occult_blood'
    ];
    public function fecalysis_occults(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
