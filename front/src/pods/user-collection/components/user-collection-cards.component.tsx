import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { UserEntityVm } from "../user-collection.vm";
import { UserCard } from "./user-card.component"; // on next step we will create this component

interface Props extends WithStyles<typeof styles> {  
  userCollection: UserEntityVm[];
  editHotel : (id : string) => void;
}

const styles = theme => createStyles({
    listLayout: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  });

export const HotelCollectionCardsComponentInner : React.FunctionComponent<Props> = (props) => {
  const { userCollection, classes, editHotel } = props;

  return (
    <div className={classes.listLayout}>
      {userCollection.map(user => (
        <UserCard user={user} key={user.email} editHotel={editHotel}/>
      ))}
    </div>
  );
};

export const HotelCollectionCardsComponent = withStyles(styles)(
    HotelCollectionCardsComponentInner
);
