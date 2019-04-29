import * as React from "react";
import { HotelEntityVm } from "pods/hotel-collection/hotel-collection.vm";
import { TableRow, TableCell } from "@material-ui/core";
import { WithStyles, createStyles, Icon, withStyles } from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
    hotel: HotelEntityVm;
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

const HotelRowComponentInner: React.FunctionComponent<Props> = (props) => {
    const { classes, hotel, editHotel } = props;

    return (
        <TableRow key={hotel.id} onDoubleClick={() => editHotel(hotel.id)} className={classes.tableRowHover}>
            <TableCell align="right" >
                <img  className={classes.picture} src={hotel.picture} />
            </TableCell>
            <TableCell align="right">{hotel.name}</TableCell>
            <TableCell align="right">{hotel.description}</TableCell>
            <TableCell align="right">{hotel.rating}</TableCell>
            <TableCell align="right">{hotel.address}</TableCell>
        </TableRow>
    );
};

export const HotelRowComponent = withStyles(styles)(
    HotelRowComponentInner
);
