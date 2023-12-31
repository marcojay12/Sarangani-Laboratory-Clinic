<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TpAgRatio extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'total_protein',
        'albumin',
        'globulin',
        'ag_ratio'
    ];
    public function tp_ag(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
