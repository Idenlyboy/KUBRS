<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email:rfc,dns'],
            'password' => ['required', 'max:20'],
            'surname' => ['string', 'required', 'max:90'],
            'name' => ['string', 'required', 'max:90'],
            'room_num' => ['numeric', 'required', 'max:3'],
            'contract_num' => ['string', 'required', 'max:10']
        ];
    }
}
