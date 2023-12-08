<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DifferentialCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'neutrophils',
        'lymphocytes',
        'monocytes',
        'eosinophils',
        'basophils'
    ];
    public function differentials(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
