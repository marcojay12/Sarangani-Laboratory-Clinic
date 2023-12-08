<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyFEIAResult extends Model
{
    use HasFactory;
    protected $fillable = [
        'fluorescence_enzyme',
        'cardiac_markers',
        'troponin',
        'ck_mb',
        'remarks'
    ];
    public function feia_result(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
