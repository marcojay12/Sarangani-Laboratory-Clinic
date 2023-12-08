<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Covid extends Model
{
    use HasFactory;
    public function covid(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
