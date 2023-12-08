<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pathology extends Model
{
    use HasFactory;
    protected $fillable = [
        'pathologist_name',
        'pathologist_license_name'
    ];
    public function pathologys(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
