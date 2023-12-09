<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Microscopy extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_information_id',
        'specimen',
        'result',
        'remarks_pregnancy',

        'color',
        'transparency',

        'wbc_urine',
        'rbc_urine',
        'epithelial_cell',
        'bacteria',
        'mucus_threads',

        'reaction',
        'sp_gravity',
        'glucose',
        'protein',

        'amorphous_urates',
        'amorphous_phosphates',
        'calcium_oxalates',
        'triple_phosphates',
        'uric_acid',
        'others_crystal',

        'hyaline_cast',
        'wbc_cast',
        'rbc_cast',
        'granular_cast',
        'pregnancy_test',
        'remarks_cast',

        'color_fecal',
        'consistency',

        'rbc_fecal',
        'wbc_fecal',
        'fat_globules',
        'yeast_cells',

        'fecal_occult_blood',

        'lumbricoides_ova',
        'trichiura_ova',
        'hookworm_ova',
        'histolytica_cyst',
        'histolytica_trophozoite',
        'entamoeba_coli_cyst',
        'entamoeba_coli_trophozoite',
        'giardia_lamblia_cyst',
        'giardia_lamblia_trophozoite',
        'others_fecal',
        'remarks_fecal'

    ];

    public function microscope(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
