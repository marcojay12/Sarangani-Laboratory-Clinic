<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoagulationStudiesProtime extends Model
{
    use HasFactory;
    protected $fillable = [
        'pt',
        'control',
        'activity',
        'inr'
    ];
    public function coagulations_protimes(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
