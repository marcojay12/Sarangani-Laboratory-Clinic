<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ErythrocyteSedimentation extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_information_id',
        'erythrocyte'
    ];
    public function erythrocyte_sedimentations(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
