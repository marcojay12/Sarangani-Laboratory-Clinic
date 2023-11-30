<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Miscellaneous extends Model
{
    use HasFactory;
    public function misc(){
        return $this->hasOne(Miscellaneous::class, 'miscellaneouses_id', 'id');
    }
}
