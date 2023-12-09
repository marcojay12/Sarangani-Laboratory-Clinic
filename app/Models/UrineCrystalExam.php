<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCrystalExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'amorphous_urates',
        'amorphous_phosphates',
        'calcium_oxalates',
        'uric_acid',
        'others'
    ];
    public function urine_crystal(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
