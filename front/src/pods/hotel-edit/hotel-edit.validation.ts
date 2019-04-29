import {
  createFormValidation,
  ValidationConstraints,
  Validators
} from "lc-form-validation";
import { validateValueMatchValidator } from "common/validators";

const HotelEditFormValidationConstraints: ValidationConstraints = {
  fields: {
      name: [{ validator: Validators.required }],
      city: [{ validator: validateValueMatchValidator, 
              customParams: {stringToMatch: 'No city selected'} }],
      description: [
          { validator: Validators.required },
          {
              validator: Validators.maxLength,
              customParams: { length: 10 }
          }]

   }
};

export const hotelEditFormValidation = createFormValidation(
  HotelEditFormValidationConstraints
);