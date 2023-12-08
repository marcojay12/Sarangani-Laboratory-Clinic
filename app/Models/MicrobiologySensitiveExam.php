<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologySensitiveExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'sensitive',
        'resistant',
        'intermediate'
    ];
    public function sensitive_exam(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
