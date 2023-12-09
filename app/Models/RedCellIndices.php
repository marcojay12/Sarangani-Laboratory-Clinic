<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RedCellIndices extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'mcv',
        'mch',
        'mchc'
    ];
    public function red_cell(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
