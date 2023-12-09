<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyExamTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'hbsag',
        'anti_hbs',
        'anti_hcv',
        'syphilis',
        'aso',
        'ra_rf',
        'crp',
        'troponin',
        'remarks'
    ];
    public function serology_test(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
