<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodGlucose extends Model
{
    use HasFactory;
    protected $fillable = [
        'fbs',
        'first_hour',
        'second_hour',
        'third_hour'
    ];
    public function bloodglocoses(){
        return $this->belongsTo(Chemistry::class, 'chemistries_id', 'id');
    }
}
