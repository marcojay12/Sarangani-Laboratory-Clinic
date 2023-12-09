<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hematology extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_information_id',
        'hemoglobin',
        'hematocrit',
        'rbc_count',
        'wbc_count',

        'mcv',
        'mch',
        'mchc',

        'neutrophils',
        'lymphocytes',
        'monocytes',
        'eosinophils',
        'basophils',

        'platelet_count',
        'clotting_time',
        'bleeding_time',

        'erythrocyte',

        'reticulocyte',
        'remarks_hematology',

        'pt',
        'protime_control',
        'activity',
        'inr',

        'ptt',
        'appt_control',
        'ratio',
        'remarks_coagulation'
    ];


    public function hemato(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
