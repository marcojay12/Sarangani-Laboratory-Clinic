<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chemistry extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'speciment_type',
        'source_of_speciment',
        'result',
        'remarks_culture',

        'fbs',
        'rbs',
        'creatinine',
        'uric_acid',
        'sgot',
        'sgpt',
        'alkaline_phos',
        'ldh',
        'ggt',
        'magnesium',
        'phosphorus',
        'amylase',
        'remarks_chem',

        'cholesterol',
        'triglyceride',
        'hdl',
        'ldl',

        'hbac',

        'urine_volume',
        'serum_creatinine',
        'urine_creatinine',
        'hours_urine_creatinine',
        'creatinine_clearance',

        'sodium',
        'potassium',
        'calcium_total',
        'calcium_ionized',
        'ph',
        'chloride',

        'total_protein',
        'albumin',
        'globulin',
        'ag_ratio',

        'urea',

        'glucose_load',
        'glucose_result',
        'remark_glucos',

        'blood_fbs',
        'first_hour',
        'second_hour',
        'third_hour',

        'fasting',
        'fasting_first_hour',
        'fasting_second_hour',
        'fasting_third_hour'

    ];

    public function chemist()
    {
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
