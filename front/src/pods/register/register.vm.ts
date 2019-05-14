import { FieldValidationResult } from "lc-form-validation";

export interface RegisterEntityVm {
    login: string;
    password: string;
    passwordConfirm: string;
  }
  
  export const createRegisterEntity = (): RegisterEntityVm => ({
    login: "",
    password: "",
    passwordConfirm: "",
  });

  export interface RegisterFormErrors {
    login: FieldValidationResult;
    password: FieldValidationResult;
    passwordConfirm: FieldValidationResult;
  }
  
  export const createDefaultRegisterFormErrors = (): RegisterFormErrors => ({
    login: new FieldValidationResult(),
    password: new FieldValidationResult(),
    passwordConfirm: new FieldValidationResult()
  });