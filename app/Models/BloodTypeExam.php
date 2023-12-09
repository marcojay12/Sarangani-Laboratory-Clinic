<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodTypeExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'blood_typing',
        'remarks'
    ];
    public function bloodtype(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
