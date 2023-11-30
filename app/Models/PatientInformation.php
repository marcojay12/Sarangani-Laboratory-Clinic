<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientInformation extends Model
{
    use HasFactory;
    protected $table = 'patient_information';

protected $fillable = [
    'date_printed',
    'time_printed',
    'date_recieved',
    'time_recieved',
    'date_released',
    'time_released',
    'fullname',
    'age',
    'gender',
    'hospital_lists_id',
    'laboratory_codes_id',
    'address',
    'request_physician',
    'ward',
    'bed_number',
];
// public function patient_info(){
//     return $this->belongsTo(::class, 'microscopies_id', 'id');
// }
}
