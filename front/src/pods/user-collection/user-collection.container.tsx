import * as React from "react";
import { UserCollectionComponent } from "./user-collection.component";
import { UserEntityVm } from "./user-collection.vm";
import { routesLinks } from "core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { getUsersCollection } from "./user-collection.api";
import { mapFromApiToVm } from "./user-collection.mapper";
import { mapFromAToBCollection } from "common";

const useUserCollection = () => {
  const [usersCollection, setUsersCollection] = React.useState<UserEntityVm[]>(
    []
  );

  const loadUsersCollection = () =>
  getUsersCollection().then(result =>
    setUsersCollection(mapFromAToBCollection(mapFromApiToVm, result))
    );

  return { usersCollection, loadUsersCollection };
};

interface Props extends RouteComponentProps {}

export const UserCollectionContainerInner = (props : Props) => {
  const {usersCollection, loadUsersCollection} = useUserCollection();

  const editHotel = (hotelId : string) => {      
    props.history.push(routesLinks.hotelEdit(hotelId));
  }

  React.useEffect(() => {
    loadUsersCollection();
  }, []);

  return  <UserCollectionComponent 
            userCollection={usersCollection} 
            editHotel = {editHotel}
          />;
};

export const UserCollectionContainer = withRouter<Props>(UserCollectionContainerInner);

