<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Electrolytes extends Model
{
    use HasFactory;
    protected $fillable = [
        'sodium',
        'potassium',
        'calcium',
        'ph',
        'chloride'
    ];
    public function electrolyte(){
        return $this->belongsTo(Chemistry::class, 'chemistries_id', 'id');
    }
}
