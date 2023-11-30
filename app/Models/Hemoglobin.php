<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hemoglobin extends Model
{
    use HasFactory;
    protected $fillable = [
        'hba1c'
    ];
    public function hemoglobins(){
        return $this->belongsTo(Chemistry::class, 'chemistries_id', 'id');
    }
}
