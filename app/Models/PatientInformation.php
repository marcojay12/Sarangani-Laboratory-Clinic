<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientInformation extends Model
{
    use HasFactory;
    protected $table = 'patient_information';
    protected $primaryKey = 'id';

    protected $fillable = [
        'surname',
        'middlename',
        'firstname',
        'suffix',
        'age',
        'gender',
        'hospital_number',
        'lab_number',
        'address',
        'physician',
        'ward',
        'bed_number',
        'birthday'
    ];
    public function patient_info()
    {
        return $this->hasMany(PatientInformation::class, 'Patient_information_id', 'id');
    }
}
