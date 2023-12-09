<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyKOHS extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'specimen',
        'result',
        'remarks'
    ];
    public function kohs(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
