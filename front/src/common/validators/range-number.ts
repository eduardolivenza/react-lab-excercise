import { FieldValidationResult } from 'lc-form-validation';
import { any, number } from 'prop-types';

export const VALIDATION_TYPE = 'FIELDS_MATCH';

interface CustomParams {
    minimum: number;
    maximum: number;
}

//export const customParams = {minimum:3, maximum: 5};

export const validateRangeNumber = (value: number, vm: any, customParams: CustomParams): FieldValidationResult => {
    validateCustomParams(customParams);

    const isValueInformed = (value != void (0) && value !== null);
    let passed = true;



    if (isValueInformed) {
        passed = executeValidation(value, customParams);
    }

    return buildValidationResult(passed);

}

const executeValidation = (value: number, customParams: CustomParams): boolean => {
    return (Number.isInteger(value)) && ((value <= customParams.maximum) && (value >= customParams.minimum));
}

const buildValidationResult = (successfull: boolean): FieldValidationResult => {
    const fieldValidationResult: FieldValidationResult = new FieldValidationResult();
    fieldValidationResult.type = VALIDATION_TYPE;
    fieldValidationResult.succeeded = successfull;
    fieldValidationResult.errorMessage = '';
    if (!successfull) {
        fieldValidationResult.errorMessage = 'Error. It has to be an integer between 3 and 5';
    }
    return fieldValidationResult;
}

const validateCustomParams = (customParams: CustomParams) => {
    const isCustomParamsInformed : boolean = (customParams != void (0) && customParams !== null);
    const isMinimumValueInformed : boolean = (isCustomParamsInformed && customParams.minimum != void (0) && customParams.minimum !== null);
    const isMaximumValueInformed : boolean = (isCustomParamsInformed && customParams.maximum != void (0) && customParams.maximum !== null);
    const isMinimumLowerThanMaximum : boolean = (isMinimumValueInformed && isMaximumValueInformed && (customParams.minimum <= customParams.maximum));
    if (!isMinimumLowerThanMaximum) {
        throw {
            name: "CustomParam Error",
            level: "Show Stopper",
            message: "CustomParam has to be informed.",
        };
    }
    
}

