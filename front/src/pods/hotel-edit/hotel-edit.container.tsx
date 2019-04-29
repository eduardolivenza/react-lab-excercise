import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { hotelEditRouteParams } from "core";
import { HotelEditComponent } from "./hotel-edit.component";
import { hotelMockData } from "./hotel-edit.mock";
import { HotelEntityVm, createDefaultHotel, HotelFormErrors, createDefaultHotelFormErrors } from "./hotel-edit.vm";
import { citiesLookup } from "core";
import { FormValidationResult } from "lc-form-validation";
import { HotelEditFormValidation } from "./hotel-edit.validation";

interface Props extends RouteComponentProps { }

const HotelEditContainerInner = (props: Props) => {
  const [hotel, setHotel] = React.useState(createDefaultHotel());
  const [cities] = React.useState(citiesLookup);

  const [hotelFormErrors, setHotelFormErrors] = React.useState<HotelFormErrors>(
    createDefaultHotelFormErrors()
  );

  React.useEffect(() => {
    setHotel(hotelMockData);
  }, []);

  const onFieldUpdate = (id: keyof HotelEntityVm, value: any) => {
    setHotel({
      ...hotel,
      [id]: value
    });

    HotelEditFormValidation
      .validateField(hotel, name, value)
      .then(fieldValidationResult => {
        setHotelFormErrors({
          ...hotelFormErrors,
          [name]: fieldValidationResult
        });
      });
  };

  const loadHotel = () => {
    console.log(props.match.params[hotelEditRouteParams.id]);
  };

  React.useEffect(() => {
    loadHotel();
  }, []);

  const doSave = () => {
    HotelEditFormValidation.validateForm(hotel).then(formValidationResult => {
      if (formValidationResult.succeeded) {
        //save
      } else {
        alert("error, review the fields");
        const updateHotelFormErrors = {
          ...hotelFormErrors,
          ...formValidationResult.fieldErrors
        };
        setHotelFormErrors(updateHotelFormErrors);
      }
    });
  };

  return (
    <>
      <HotelEditComponent
        hotel={hotel}
        cities={cities}
        onFieldUpdate={onFieldUpdate}
        onSave={doSave}
        hotelFormErrors={hotelFormErrors}
      />
    </>
  );
};

export const HotelEditContainer = withRouter<Props>(HotelEditContainerInner);
