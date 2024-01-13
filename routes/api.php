<?php

use App\Http\Controllers\BilirubinController;
use App\Http\Controllers\BloodGlucoseController;
use App\Http\Controllers\BloodTypeExamController;
use App\Http\Controllers\ChemistryController;
use App\Http\Controllers\ChemistryExamOralGlucosController;
use App\Http\Controllers\ChemistryExamResultController;
use App\Http\Controllers\CoagulationStudiesApptsController;
use App\Http\Controllers\CoagulationStudiesProtimeController;
use App\Http\Controllers\CompleteBloodCountController;
use App\Http\Controllers\CovidController;
use App\Http\Controllers\CovidRapidTestController;
use App\Http\Controllers\CrossMatchingController;
use App\Http\Controllers\CrossMatchingExamController;
use App\Http\Controllers\CultureAndSensitiveController;
use App\Http\Controllers\CultureSensitivityResultController;
use App\Http\Controllers\DifferentialCountController;
use App\Http\Controllers\ElectrolytesController;
use App\Http\Controllers\ErythrocyteSedimentationController;
use App\Http\Controllers\FecalysisMacroscopicExamController;
use App\Http\Controllers\FecalysisMicroscopicExamController;
use App\Http\Controllers\FecalysisOccultBloodController;
use App\Http\Controllers\FecalysisTestController;
use App\Http\Controllers\HematologyController;
use App\Http\Controllers\HemoglobinController;
use App\Http\Controllers\LipidProfileController;
use App\Http\Controllers\MedicalTechnologyController;
use App\Http\Controllers\MicrobiologyAfbStainController;
use App\Http\Controllers\MicrobiologyController;
use App\Http\Controllers\MicrobiologyGramStainController;
use App\Http\Controllers\MicrobiologyKOHSController;
use App\Http\Controllers\MicrobiologySensitiveExamController;
use App\Http\Controllers\MicroscopyController;
use App\Http\Controllers\MiscellaneousController;
use App\Http\Controllers\MiscellaneousFormController;
use App\Http\Controllers\PathologyController;
use App\Http\Controllers\PatientInformationController;
use App\Http\Controllers\PhysicianController;
use App\Http\Controllers\PlateletCountController;
use App\Http\Controllers\PregnancyTestController;
use App\Http\Controllers\RadioGraphicReportController;
use App\Http\Controllers\RadiologyController;
use App\Http\Controllers\RedCellIndicesController;
use App\Http\Controllers\ReticulocyteCountController;
use App\Http\Controllers\SerologyController;
use App\Http\Controllers\SerologyDengueDouController;
use App\Http\Controllers\SerologyExamTestController;
use App\Http\Controllers\SerologyFEIAResultController;
use App\Http\Controllers\SerologyTyphoidTestController;
use App\Http\Controllers\SerologyWidalTestController;
use App\Http\Controllers\TpAgRatioController;
use App\Http\Controllers\UltraSoundController;
use App\Http\Controllers\UreaController;
use App\Http\Controllers\UrineCastExamController;
use App\Http\Controllers\UrineChemicalExamController;
use App\Http\Controllers\UrineCreatinineController;
use App\Http\Controllers\UrineGlucoseController;
use App\Http\Controllers\UrineMacroscopicExamController;
use App\Http\Controllers\UrineMicroscopicExamController;
use App\Models\ChemistryExamOralGlucos;
use App\Models\CoagulationStudiesAppts;
use App\Models\CultureSensitivityResult;
use App\Models\DifferentialCount;
use App\Models\FecalysisMacroscopicExam;
use App\Models\FecalysisMicroscopicExam;
use App\Models\FecalysisOccultBlood;
use App\Models\FecalysisTest;
use App\Models\Hemoglobin;
use App\Models\Microbiology;
use App\Models\MicrobiologyAfbStain;
use App\Models\MicrobiologyKOHS;
use App\Models\MicrobiologySensitiveExam;
use App\Models\Microscopy;
use App\Models\Miscellaneous;
use App\Models\RadioGraphicReport;
use App\Models\Radiology;
use App\Models\ReticulocyteCount;
use App\Models\Serology;
use App\Models\SerologyDengueDou;
use App\Models\SerologyExamTest;
use App\Models\SerologyFEIAResult;
use App\Models\SerologyTyphoidTest;
use App\Models\UrineCastExam;
use App\Models\UrineGlucose;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/patients', [PatientInformationController::class, 'index']);

//save area
Route::post('/save_bloodtype', [BloodTypeExamController::class, 'store']);
Route::post('/save', [PatientInformationController::class, 'store']);
Route::post('/save_chemistry', [ChemistryController::class, 'store']);
Route::post('/save_covid', [CovidRapidTestController::class, 'store']);
Route::post('/save_crossmatch', [CrossMatchingExamController::class, 'store']);
Route::post('/save_hematology', [HematologyController::class, 'store']);
Route::post('/save_microbiology', [MicrobiologyController::class, 'store']);
Route::post('/save_microscopy', [MicroscopyController::class, 'store']);
Route::post('/save_misc', [MiscellaneousFormController::class, 'store']);
Route::post('/save_serology', [SerologyController::class, 'store']);
Route::post('/save_radiology', [RadiologyController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
