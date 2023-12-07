<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CultureAndSensitive extends Model
{
    use HasFactory;
    protected $fillable = [
        'lab_number',
        'speciment_type',
        'source_of_speciment',
        'result',
        'remarks'
    ];

    public function chem_culture_sensitive(){
        return $this->belongsTo(Chemistry::class, 'chemistries_id', 'id');
    }
}
