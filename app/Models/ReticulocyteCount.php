<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReticulocyteCount extends Model
{
    use HasFactory;
    protected $fillable = [
        'reticulocyte'
    ];
    public function reticulocytes(){
        return $this->belongsTo(Hematology::class, 'hematologies_id', 'id');
    }
}
