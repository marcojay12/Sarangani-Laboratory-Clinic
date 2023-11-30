<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineCrystalExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'amorphous_urates',
        'amorphous_phosphates',
        'calcium_oxalates',
        'uric_acid',
        'others'
    ];
    public function urine_crystal(){
        return $this->belongsTo(Microscopy::class, 'microscopies_id', 'id');
    }
}
