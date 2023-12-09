<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Urea extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'urea'
    ];
    public function urea(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
