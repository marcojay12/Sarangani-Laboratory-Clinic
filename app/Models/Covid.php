<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Covid extends Model
{
    use HasFactory;
    public function covid(){
        return $this->hasOne(Covid::class, 'covids_id', 'id');
    }
}
