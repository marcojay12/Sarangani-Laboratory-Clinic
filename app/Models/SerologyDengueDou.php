<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyDengueDou extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'ns',
        'ig_g',
        'ig_m'
    ];
    public function dengue_dou()
    {
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
