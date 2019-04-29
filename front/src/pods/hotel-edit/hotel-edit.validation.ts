import {
    createFormValidation,
    ValidationConstraints,
    Validators
} from "lc-form-validation";

const HotelEditFormValidationConstraints: ValidationConstraints = {
    fields: {
        name: [{ validator: Validators.required }],
        city: [{ validator: Validators.required }],
        description: [
            { validator: Validators.required },
            {
                validator: Validators.maxLength,
                customParams: { length: 250 }
            },
            {
                validator: Validators.minLength,
                customParams: { length: 10 }
            }]

    }
};

export const HotelEditFormValidation = createFormValidation(
    HotelEditFormValidationConstraints
);
