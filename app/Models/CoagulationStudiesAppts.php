<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoagulationStudiesAppts extends Model
{
    use HasFactory;
    protected $fillable = [
        'ptt',
        'control',
        'ratio'
    ];
    public function coagulations_appts(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
