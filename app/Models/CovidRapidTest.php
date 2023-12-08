<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CovidRapidTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'type_of_specimen',
        'test_kit_brand',
        'method_test',
        'result',
        'value_test',
        'remarks'
    ];
    public function covids(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }
}
