<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Microbiology extends Model
{
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'specimen_type',
        'source_of_specimen',
        'result_sensitive',
        'culture_isolate',
        'sensitive_report',
        'resistant_report',
        'intermediate_report',
        'specimen_gram',
        'result_gram',
        'epithelial_cell',
        'polymorphonuclears',
        'remarks_gram',
        'specimen_afb',
        'result_afb',
        'remarks_afb',
        'specimen_koh',
        'result_koh',
        'remarks_koh'

    ];

    use HasFactory;
    public function microbio(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
