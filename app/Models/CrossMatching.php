<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrossMatching extends Model
{
    use HasFactory;

    public function crossmatch(){
        return $this->hasOne(CrossMatching::class, 'cross_matchings_id', 'id');
    }
}
