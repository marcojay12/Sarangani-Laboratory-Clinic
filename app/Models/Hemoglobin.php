<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hemoglobin extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'hbac'
    ];
    public function hemoglobins(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
