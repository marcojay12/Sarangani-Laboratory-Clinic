<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyGramStain extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'specimen',
        'result',
        'epithelial_cell',
        'polymorphonuclears',
        'remarks'
    ];
    public function gram_stain(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
