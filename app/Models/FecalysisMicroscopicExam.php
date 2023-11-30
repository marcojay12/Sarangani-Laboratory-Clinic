<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FecalysisMicroscopicExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'rbc',
        'wbc',
        'fat_globules',
        'yeast_cells'
    ];
    public function fecalysis_micro_exam(){
        return $this->belongsTo(Microscopy::class, 'microscopies_id', 'id');
    }
}
