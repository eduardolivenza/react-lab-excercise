import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { hotelEditRouteParams } from "core";
import { HotelEditComponent } from "./hotel-edit.component";
import { hotelMockData } from "./hotel-edit.mock";
import { HotelEntityVm, createDefaultHotel } from "./hotel-edit.vm";
import { citiesLookup } from "core";
import { mapFromApiToVm } from "./hotel-edit.mapper";
import { getHotelEdit } from './hotel-edit.api';

interface Props extends RouteComponentProps {}

const useHotelEdit = () => {
  const [hotel, setHotel] = React.useState<HotelEntityVm>(
    createDefaultHotel()
  );

  
  const loadHotelEdit = (id : number) =>
      getHotelEdit(id).then(result =>
          setHotel(mapFromApiToVm(result))
    );

  return { hotel, setHotel, loadHotelEdit };
};


interface Props extends RouteComponentProps {}

const HotelEditContainerInner = (props: Props) => {
  const [cities] = React.useState(citiesLookup);
  const {hotel, setHotel, loadHotelEdit} = useHotelEdit();
  
  React.useEffect(() => {
    loadHotelEdit(props.match.params[hotelEditRouteParams.id]);
  }, []);

  const onFieldUpdate = (id: keyof HotelEntityVm, value: any) => {
    setHotel({
      ...hotel,
      [id]: value
    });
  };


  const doSave = () => {};

  return (
    <>
      <HotelEditComponent
        hotel={hotel}
        cities={cities}
        onFieldUpdate={onFieldUpdate}
        onSave={doSave}
      />
    </>
  );
};

export const HotelEditContainer = withRouter<Props>(HotelEditContainerInner);
