<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LipidProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'cholesterol',
        'triglyceride',
        'hdl',
        'ldl'
    ];
    public function lipid_prof(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
