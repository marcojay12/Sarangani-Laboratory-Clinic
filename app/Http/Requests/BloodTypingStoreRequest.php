<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BloodTypingStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'blood_typing_id' => $this->blood_typing()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'blood_typing' => 'nullable',
            'remarks' => 'nullable'
        ];
    }
}
