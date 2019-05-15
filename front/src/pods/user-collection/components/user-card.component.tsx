import * as React from "react";
import Card from "@material-ui/core/Card";
import { UserEntityVm } from "../user-collection.vm";
import {Theme} from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/edit";
import DeleteIcon from "@material-ui/icons/delete";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActions
} from "@material-ui/core";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";

interface Props extends WithStyles<typeof styles> {
  user: UserEntityVm;
  editHotel : (id : string) => void;  
}

const styles = (theme : Theme)  =>
  createStyles({
    card: {
      width: "500px",
      marginTop: theme.spacing.unit
    }
  });

export const UserCardInner = (props: Props) => {
  const {user, classes, editHotel} = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        //avatar={<Avatar aria-label="Hotel">{user.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={user.firstName}
        subheader={user.email}
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <CardMedia
            image={user.picture}
            title={user.firstName}
            style={{ height: 0, paddingTop: "56.25%" }}
          />
          <Typography variant="subtitle1" gutterBottom>
            Description
          </Typography>
        </div>
      </CardContent>
      <CardActions disableActionSpacing>
        <IconButton aria-label="Add to favorites" onClick={() => editHotel(user.email)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export const UserCard = withStyles(styles)(UserCardInner);
