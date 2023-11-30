<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlateletCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'clotting_time',
        'bleeding_time'
    ];
    public function platelet_count(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
