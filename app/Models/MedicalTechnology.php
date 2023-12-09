<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MedicalTechnology extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'mt_name',
        'mt_license_number'
    ];
    public function medtech(){
        return $this->BelongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
