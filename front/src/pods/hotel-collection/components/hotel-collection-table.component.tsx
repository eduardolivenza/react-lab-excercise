import * as React from "react";
import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { WithStyles, createStyles, Icon, withStyles } from "@material-ui/core";
import { HotelRowComponent } from "./hotel-tableRow.component";

interface Props extends WithStyles<typeof styles> {
    hotelCollection: HotelEntityVm[];
    editHotel: (id: string) => void;
}

const styles = theme => createStyles({
    table: {
    },
  
});

const HotelCollectionTableComponentInner = (props: Props) => {
    const { hotelCollection, classes, editHotel } = props;
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell align="right">picture</TableCell>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">description</TableCell>
                    <TableCell align="right">rating</TableCell>
                    <TableCell align="right">address</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
                hotelCollection.map(hotel => (<HotelRowComponent key={hotel.id} hotel={hotel} editHotel={editHotel}/>)   )
            }
            </TableBody>
        </Table>
    );
}

export const HotelCollectionTableComponent = withStyles(styles)(HotelCollectionTableComponentInner);