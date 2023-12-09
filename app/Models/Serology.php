<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serology extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'troponin_feia',
        'ck_mb',
        'remarks_feia',
        'hbsag',
        'anti_hbs',
        'anti_hcv',
        'syphilis',
        'aso',
        'ra_rf',
        'crp',
        'troponin',
        'remarks_serology',
        'ns',
        'ig_g_dengue',
        'ig_m_dengue',
        'typhi_h',
        'paratyphi_ah',
        'paratyphi_bh',
        'paratyphi_ch',
        'typhi_o',
        'paratyphi_ao',
        'paratyphi_bo',
        'paratyphi_co',
        'ig_g_typoid',
        'ig_m_typoid'

    ];


    public function serologys(){
        return $this->hasMany(PatientInformation::class, 'patient_information_id', 'id');
    }
}
