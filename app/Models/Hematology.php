<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hematology extends Model
{
    use HasFactory;

    public function hemato(){
        return $this->hasOne(Hematology::class, 'hematologies_id', 'id');
    }
}