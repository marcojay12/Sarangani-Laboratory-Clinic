<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ErythrocyteSedimentation extends Model
{
    use HasFactory;
    protected $fillable = [
        'erythrocyte'
    ];
    public function erythrocyte_sedimentations(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
