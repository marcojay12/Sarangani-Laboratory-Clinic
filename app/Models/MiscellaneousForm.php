<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MiscellaneousForm extends Model
{
    use HasFactory;
    protected $fillable = [
        'test_name',
        'result',
        'remarks'
    ];
    public function miscform(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
