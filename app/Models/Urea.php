<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Urea extends Model
{
    use HasFactory;
    protected $fillable = [
        'urea'
    ];
    public function urea(){
        return $this->belongsTo(Chemistry::class, 'chemistries_id', 'id');
    }
}
