<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serology extends Model
{
    use HasFactory;
    public function serologys(){
        return $this->hasMany(PatientInformation::class, 'patient_information_id', 'id');
    }
}
