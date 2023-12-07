<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodTyping extends Model
{
    use HasFactory;

    public function bloodtypes(){
        return $this->hasMany(BloodTyping::class, 'blood_typings_id', 'id');
    }
}
