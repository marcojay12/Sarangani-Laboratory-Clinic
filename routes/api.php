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

Route::post('/save', [PatientInformationController::class, 'store']);
Route::post('/save_chemistry', [ChemistryController::class, 'store']);
// Route::post('/save_chemistry', [ChemistryExamOralGlucosController::class, 'store']);
// Route::post('/save_chemistry', [ChemistryExamResultController::class, 'store']);
// Route::post('/save_chemistry', [CoagulationStudiesApptsController::class, 'store']);
// Route::post('/save_chemistry', [CoagulationStudiesProtimeController::class, 'store']);
// Route::post('/save_chemistry', [CompleteBloodCountController::class, 'store']);
//Route::post('/save', [CovidController::class, 'store']);
Route::post('/save_covid', [CovidRapidTestController::class, 'store']);
//::post('/save', [CrossMatchingController::class, 'store']);
Route::post('/save_crossmatch', [CrossMatchingExamController::class, 'store']);
// Route::post('/save_culture', [CultureAndSensitiveController::class, 'store']);
Route::post('/save_hematology', [HematologyController::class, 'store']);
Route::post('/save_microbiology', [MicrobiologyController::class, 'store']);
Route::post('/save_microscopy', [MicroscopyController::class, 'store']);
Route::post('/save_misc', [MiscellaneousFormController::class, 'store']);
Route::post('/save_serology', [SerologyController::class, 'store']);
Route::post('/save_radiology', [RadiologyController::class, 'store']);
// Route::post('/save_sensitive', [CultureSensitivityResultController::class, 'store']);
// Route::post('/save_differential', [DifferentialCountController::class, 'store']);
// Route::post('/save_electrolyte', [ElectrolytesController::class, 'store']);
// Route::post('/save_sedimentation', [ErythrocyteSedimentationController::class, 'store']);
// Route::post('/save_fecalMacro', [FecalysisMacroscopicExamController::class, 'store']);
// Route::post('/save_fecalMicro', [FecalysisMicroscopicExamController::class, 'store']);
// Route::post('/save_fecalOccult', [FecalysisOccultBloodController::class, 'store']);
// Route::post('/save_fecalTest', [FecalysisTestController::class, 'store']);
// //Route::post('/save', [HematologyController::class, 'store']);
// Route::post('/save_chemistry', [HemoglobinController::class, 'store']);
// Route::post('/save_lipid', [LipidProfileController::class, 'store']);
// Route::post('/save_mt', [MedicalTechnologyController::class, 'store']);
// Route::post('/save_aft', [MicrobiologyAfbStainController::class, 'store']);
// //Route::post('/save', [MicrobiologyController::class, 'store']);
// Route::post('/save_grams', [MicrobiologyGramStainController::class, 'store']);
// Route::post('/save_kohs', [MicrobiologyKOHSController::class, 'store']);
// Route::post('/save_microSensitive', [MicrobiologySensitiveExamController::class, 'store']);
// //Route::post('/save', [MicroscopyController::class, 'store']);
// //Route::post('/save', [MiscellaneousController::class, 'store']);
// Route::post('/save_miscForm', [MiscellaneousFormController::class, 'store']);
// Route::post('/save_patho', [PathologyController::class, 'store']);
// Route::post('/save_ph', [PhysicianController::class, 'store']);
// Route::post('/save_plateletCount', [PlateletCountController::class, 'store']);
// Route::post('/save_Pregnancy', [PregnancyTestController::class, 'store']);
// Route::post('/save_radioGraphic', [RadioGraphicReportController::class, 'store']);
// //Route::post('/save', [RadiologyController::class, 'store']);
// Route::post('/save_redCell', [RedCellIndicesController::class, 'store']);
// Route::post('/save_Reticulocyte', [ReticulocyteCountController::class, 'store']);
// //Route::post('/save', [SerologyController::class, 'store']);
// Route::post('/save_Dengue', [SerologyDengueDouController::class, 'store']);
// Route::post('/save_serologyTest', [SerologyExamTestController::class, 'store']);
// Route::post('/save_serologyFeia', [SerologyFEIAResultController::class, 'store']);
// Route::post('/save_serologyTyphoid', [SerologyTyphoidTestController::class, 'store']);
// Route::post('/save_serologyWidal', [SerologyWidalTestController::class, 'store']);
// Route::post('/save_tpRatio', [TpAgRatioController::class, 'store']);
// Route::post('/save_ultra', [UltraSoundController::class, 'store']);
// Route::post('/save_urea', [UreaController::class, 'store']);
// Route::post('/save_urineCast', [UrineCastExamController::class, 'store']);
// Route::post('/save_UrineChem', [UrineChemicalExamController::class, 'store']);
// Route::post('/save_UrineCrea', [UrineCreatinineController::class, 'store']);
// Route::post('/save_UrineCast', [UrineCastExamController::class, 'store']);
// Route::post('/save_UrineGlucose', [UrineGlucoseController::class, 'store']);
// Route::post('/save_UrineMacro', [UrineMacroscopicExamController::class, 'store']);
// Route::post('/save_UrineMicro', [UrineMicroscopicExamController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
