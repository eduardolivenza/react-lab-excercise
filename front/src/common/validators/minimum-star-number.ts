import { FieldValidationResult } from 'lc-form-validation';

export const VALIDATION_TYPE = 'FIELDS_MATCH';


export const validateMinimumStarNumber = (value: number, vm: any, key: string): FieldValidationResult => {
  const isValueInformed = (value != void(0) && value !== null);
  let passed = true;

  if(isValueInformed) {
      passed = executeValidation(value);
  }

  return buildValidationResult(passed);

}

const executeValidation = (value : number) : boolean => {
    return (Number.isInteger(value)) && ((value <= 5) && (value >= 3));
}

const buildValidationResult = (successfull : boolean): FieldValidationResult => {
    const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
    fieldValidationResult.type = VALIDATION_TYPE;
    fieldValidationResult.succeeded = successfull;
    fieldValidationResult.errorMessage = '';
    if (!successfull) {
        fieldValidationResult.errorMessage = 'Error. It has to be an integer between 3 and 5';
    }
    return fieldValidationResult;
}

