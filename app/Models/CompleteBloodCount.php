<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompleteBloodCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'hemoglobin',
        'hematocrit',
        'rbc_count',
        'wbc_count'
    ];
    public function complete_blood_count(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
