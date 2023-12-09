<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyWidalTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'typhi_h',
        'paratyphi_ah',
        'paratyphi_bh',
        'paratyphi_ch',
        'typhi_o',
        'paratyphi_ao',
        'paratyphi_bo',
        'paratyphi_co',
    ];
    public function widal_test(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
