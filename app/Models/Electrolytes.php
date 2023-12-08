<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Electrolytes extends Model
{
    use HasFactory;
    protected $fillable = [
        'sodium',
        'potassium',
        'calcium',
        'ph',
        'chloride'
    ];
    public function electrolyte(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
