<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MicrobiologyGramStain extends Model
{
    use HasFactory;
    protected $fillable = [
        'laboratory_codes_id',
        'specimen',
        'result',
        'epithelial_cell',
        'polymorphonuclears',
        'remarks'
    ];
}