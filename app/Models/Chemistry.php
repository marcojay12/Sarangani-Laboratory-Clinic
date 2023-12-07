<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chemistry extends Model
{
    use HasFactory;
    public function chemist(){
        return $this->hasMany(Chemistry::class, 'chemistries_id', 'id');
    }
}
