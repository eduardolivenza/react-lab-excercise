import * as React from "react";
import { HotelEntityVm } from "./../hotel-collection.vm";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { WithStyles, createStyles, Icon, withStyles } from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    hotelCollection: HotelEntityVm[];
    editHotel: (id: string) => void;
}

const styles = theme => createStyles({
    table: {
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
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
                    hotelCollection.map(row => (
                        <TableRow key={row.id} onDoubleClick={() => editHotel(row.id)} className={classes.tableRowHover}>
                            <TableCell align="right">
                                <img width='80px' src={row.picture}/>
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.rating}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

export const HotelCollectionTableComponent = withStyles(styles)(HotelCollectionTableComponentInner);