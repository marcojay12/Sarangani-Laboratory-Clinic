<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SerologyWidalTest extends Model
{
    use HasFactory;
    protected $fillable = [
        'typhi_h',
        'paratyphi_ah',
        'paratyphi_bh',
        'paratyphi_ch',
        'typhi_o',
        'paratyphi_ao',
        'paratyphi_bo',
        'paratyphi_co',
    ];
    public function widal_test(){
        return $this->belongsTo(Serology::class, 'serologies_id', 'id');
    }
}
