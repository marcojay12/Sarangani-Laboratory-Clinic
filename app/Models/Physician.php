<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Physician extends Model
{
    use HasFactory;
    protected $fillable = [
        'phd_name',
        'phd_prt_number',
        'phd_license_number'
    ];
    public function phd(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
