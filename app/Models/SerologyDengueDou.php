<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyDengueDou extends Model
{
    use HasFactory;
    protected $fillable = [
        'ns',
        'ig_g',
        'ig_m'
    ];
    public function dengue_dou()
    {
        return $this->belongsTo(Serology::class, 'serologies_id', 'id');
    }
}
