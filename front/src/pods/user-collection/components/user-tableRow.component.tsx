import * as React from "react";

import { TableRow, TableCell } from "@material-ui/core";
import { WithStyles, createStyles, Icon, withStyles } from "@material-ui/core";
import { UserEntityVm } from "../user-collection.vm";

interface Props extends WithStyles<typeof styles> {
    user: UserEntityVm;
    editHotel: (id: string) => void;
}

const styles = theme => createStyles({
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    picture: {
        width: '5rem',
    },
});

const UserRowComponentInner: React.FunctionComponent<Props> = (props) => {
    const { classes, user, editHotel } = props;

    return (
        <TableRow key={user.email} onDoubleClick={() => editHotel(user.email)} className={classes.tableRowHover}>
            <TableCell align="right" >
                <img  className={classes.picture} src={user.picture} />
            </TableCell>
            <TableCell align="right">{user.firstName}</TableCell>
            <TableCell align="right">{user.lastName}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
        </TableRow>
    );
};

export const UserRowComponent = withStyles(styles)(
    UserRowComponentInner
);
