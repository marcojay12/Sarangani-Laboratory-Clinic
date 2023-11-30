<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Microscopy extends Model
{
    use HasFactory;
    public function microscope(){
        return $this->hasOne(Microscopy::class, 'microscopies_id', 'id');
    }
}
