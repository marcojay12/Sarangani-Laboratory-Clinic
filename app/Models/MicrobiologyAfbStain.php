<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyAfbStain extends Model
{
    use HasFactory;
    protected $fillable = [
        'laboratory_codes_id',
        'specimen',
        'result',
        'remarks'
    ];
    public function afb_stain(){
        return $this->belongsTo(Microbiology::class, 'microscopies_id', 'id');
    }

}
