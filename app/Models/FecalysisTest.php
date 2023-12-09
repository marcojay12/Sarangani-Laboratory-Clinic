<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lumbricoides_ova',
        'trichiura_ova',
        'hookworm_ova',
        'histolyrica_cyst',
        'histolytica_trophozoite',
        'entamoeba_coli_cyst',
        'entamoeba_coli_trophozoite',
        'giardia_lambia_cyst',
        'giardia_lambia_trophozoite',
        'others',
        'remarks',
    ];
    public function fecalysis_test(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
