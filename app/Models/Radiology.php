<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Radiology extends Model
{

    use HasFactory;

    protected $fillable = [
        'patient_information_id',
        'examination_ultrasound',
        'result_ultrasound',
        'image_ultrasound',
        'examination_xray',
        'result_xray',
        'image_xray'
    ];
    public function radiologys()
    {
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }

}
