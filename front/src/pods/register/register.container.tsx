import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RegisterEntityVm, createRegisterEntity, RegisterFormErrors, createDefaultRegisterFormErrors } from "./register.vm";
import { RegisterComponent } from "./register.component";
import { registerFormValidation } from "./register.validation";
import { registerNewUser } from "./register.api";


interface Props extends RouteComponentProps { }

export const RegisterContainerInner = (props: Props) => {

  const { history } = props;
  const [registerData, setRegisterData] = React.useState<RegisterEntityVm>(createRegisterEntity());
  const [registerFormErrors, setRegisterFormErrors] = React.useState<RegisterFormErrors>(createDefaultRegisterFormErrors());

  const registerUser = () => {
    registerFormValidation.validateForm(registerData).then(formValidationResult => {
      if (formValidationResult.succeeded) {
        console.log(" Register approved");
        registerNewUser(registerData).then(result => {
          if (result.status === 200) {
            alert("Login succesful");
            history.goBack();
          }
        });
      }
      else {
        console.log("register rejected");
      }
    });
  }

  const cancel = () => {
    history.goBack();
  }

  const onUpdateRegisterDataFields = (name, value) => {
    setRegisterData({
      ...registerData,
      [name]: value
    });

    registerFormValidation
      .validateField(registerData, name, value)
      .then(fieldValidationResult => {
        setRegisterFormErrors({
          ...registerFormErrors,
          [name]: fieldValidationResult
        });
      });
  };

  return (
    <RegisterComponent
      onRegister={registerUser}
      onCancel={cancel}
      regData={registerData}
      onUpdateRegData={onUpdateRegisterDataFields}
      registerFormErrors={registerFormErrors}
    />
  );
};

export const RegisterContainer = withRouter<Props>(RegisterContainerInner);