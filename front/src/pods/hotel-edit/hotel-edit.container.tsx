import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { hotelEditRouteParams } from "core";
import { HotelEditComponent } from "./hotel-edit.component";
import { hotelMockData } from "./hotel-edit.mock";
import { HotelEntityVm, createDefaultHotel, createDefaultHotelEditFormErrors, HotelEditFormErrors } from "./hotel-edit.vm";
import { citiesLookup } from "core";
import { validateValueMatchValidator } from "common/validators";
import { hotelEditFormValidation } from "./hotel-edit.validation";

interface Props extends RouteComponentProps {}

const HotelEditContainerInner = (props: Props) => {
  const [hotel, setHotel] = React.useState(createDefaultHotel());
  const [hotelEditFormErrors, setHotelEditFormErrors] = React.useState<HotelEditFormErrors>(createDefaultHotelEditFormErrors());
  const [cities] = React.useState(citiesLookup);

  React.useEffect(() => {
    setHotel(hotelMockData);
  }, []);

  const onFieldUpdate = (id: keyof HotelEntityVm, value: any) => {
    setHotel({
      ...hotel,
      [id]: value
    });

    hotelEditFormValidation.validateField(hotel, 'city', hotel.city)
    .then(fieldValidationResult => {
      setHotelEditFormErrors(({
        ...hotelEditFormErrors,
        "city": fieldValidationResult
      })
      )
    });

  };

  const loadHotel = () => {
    console.log(props.match.params[hotelEditRouteParams.id]);
  };

  React.useEffect(() => {
    loadHotel();
  }, []);

  const doSave = () => {};

  return (
    <>
      <HotelEditComponent
        hotel={hotel}
        cities={cities}
        onFieldUpdate={onFieldUpdate}
        onSave={doSave}
        hotelEditFormErrors={hotelEditFormErrors}
      />
    </>
  );
};

export const HotelEditContainer = withRouter<Props>(HotelEditContainerInner);
