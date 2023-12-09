<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyAfbStain extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'lab_number',
        'specimen',
        'result',
        'remarks'
    ];
    public function afb_stain(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }

}
