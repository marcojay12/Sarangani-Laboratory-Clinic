<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyKOHS extends Model
{
    use HasFactory;
    protected $fillable = [
        'lab_number',
        'specimen',
        'result',
        'remarks'
    ];
    public function kohs(){
        return $this->belongsTo(Microbiology::class, 'microscopies_id', 'id');
    }
}
