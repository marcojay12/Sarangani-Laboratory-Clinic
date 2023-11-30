<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrineMacroscopicExam extends Model
{
    use HasFactory;
     protected $fillable = [
        'color',
        'transparency'
    ];
    public function urine_macroscopic(){
        return $this->belongsTo(Microscopy::class, 'microscopies_id', 'id');
    }
}
