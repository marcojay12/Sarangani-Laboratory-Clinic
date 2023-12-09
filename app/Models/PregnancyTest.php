<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PregnancyTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'specimen',
        'result',
        'remarks'
    ];
    public function pregnancy_test(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
