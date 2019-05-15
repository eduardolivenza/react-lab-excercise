import * as React from "react";
import { UserEntityVm } from "../user-collection.vm";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { WithStyles, createStyles, Icon, withStyles } from "@material-ui/core";
import { UserRowComponent } from "./user-tableRow.component";

interface Props extends WithStyles<typeof styles> {
    userCollection: UserEntityVm[];
    editHotel: (id: string) => void;
}

const styles = theme => createStyles({
    table: {
    },
  
});

const UserCollectionTableComponentInner = (props: Props) => {
    const { userCollection, classes, editHotel } = props;
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell align="right">Picture</TableCell>
                    
                    <TableCell align="right">First name</TableCell>
                    <TableCell align="right">Last name</TableCell>
                    <TableCell align="right">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                userCollection.map(user => (<UserRowComponent key={user.email} user={user} editHotel={editHotel}/>)   )
            }
            </TableBody>
        </Table>
    );
}

export const UserCollectionTableComponent = withStyles(styles)(UserCollectionTableComponentInner);