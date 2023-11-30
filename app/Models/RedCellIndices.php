<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RedCellIndices extends Model
{
    use HasFactory;
    protected $fillable = [
        'mcv',
        'mch',
        'mchc'
    ];
    public function red_cell(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
