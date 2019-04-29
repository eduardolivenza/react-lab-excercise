import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCollectionCardsComponent } from "./components/hotel-collection-cards.component";
import { HotelCollectionTableComponent } from "./components/hotel-collection-table.component";
import { HotelCollectionViewSelectorComponent, Layout } from "./components/hotel-collection-view-selector.component";

interface Props{  
  hotelCollection: HotelEntityVm[];
  editHotel : (id : string) => void;
  layout? : Layout;
}

export const HotelCollectionComponent : React.FunctionComponent<Props> = (props) => {
  const { hotelCollection, editHotel, layout } = props;
  const [componetLayout, setComponentLayout] = React.useState(layout);

  let hotelCollectionComponent;
  if(componetLayout === Layout.Card){
    hotelCollectionComponent = <HotelCollectionCardsComponent hotelCollection={hotelCollection} editHotel={editHotel}/>;
  }else if (componetLayout === Layout.Table){
    hotelCollectionComponent = <HotelCollectionTableComponent hotelCollection={hotelCollection} editHotel={editHotel}/>;
  }

  return (
    <>
    <HotelCollectionViewSelectorComponent onChangeView={setComponentLayout} layout={componetLayout}/>
    {hotelCollectionComponent}
    </>
  );
};

HotelCollectionComponent.defaultProps = {
  layout: Layout.Card,
} 