import * as React from "react";
import { UserEntityVm } from "./user-collection.vm";
import { HotelCollectionCardsComponent } from "./components/user-collection-cards.component";
import { UserCollectionTableComponent } from "./components/user-collection-table.component";
import { HotelCollectionViewSelectorComponent, Layout } from "./components/user-collection-view-selector.component";

interface Props {
  userCollection: UserEntityVm[];
  editHotel: (id: string) => void;
  layout?: Layout;
}

export const UserCollectionComponent: React.FunctionComponent<Props> = (props) => {
  const { userCollection, editHotel, layout } = props;
  const [componetLayout, setComponentLayout] = React.useState(layout);

  let hotelCollectionComponent;
  if (componetLayout === Layout.Card) {
    hotelCollectionComponent = <HotelCollectionCardsComponent userCollection={userCollection} editHotel={editHotel} />;
  } else if (componetLayout === Layout.Table) {
    hotelCollectionComponent = <UserCollectionTableComponent userCollection={userCollection} editHotel={editHotel} />;
  }

  return (
    <>
      <HotelCollectionViewSelectorComponent onChangeView={setComponentLayout} layout={componetLayout} />
      {hotelCollectionComponent}
    </>
  );
};

UserCollectionComponent.defaultProps = {
  layout: Layout.Card,
} 