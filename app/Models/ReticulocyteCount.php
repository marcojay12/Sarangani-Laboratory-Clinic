<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReticulocyteCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'reticulocyte'
    ];
    public function reticulocytes(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
