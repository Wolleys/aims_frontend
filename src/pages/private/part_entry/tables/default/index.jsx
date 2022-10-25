import { Fragment } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ActionMenu from "../../components/actionMenu";
import PrimarySearchBar from '../../../../../components/shared/SearchBar/primary';

import {
    Paper, Table, TableRow, TableHead, TableBody, TableCell, tableCellClasses,
    TableContainer, styled,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#EBEBEB",
        color: theme.palette.text.primary,
        fontSize: 14, paddingTop: '10px', paddingBottom: '10px',
        fontWeight: '500', cursor: 'default'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

function createData(description, part_number, location, starting_quantity, quantity_received,
    quantity_issued, quantity_on_hand, reorder_level) {
    return {
        description,
        part_number,
        location,
        starting_quantity,
        quantity_received,
        quantity_issued,
        quantity_on_hand,
        reorder_level,
    };
}

const rows = [
    createData("SEAL & GASKET", "LW-14976", "BK20", 24, 4, 3, 25, 10),
    createData("Ice cream sandwich", "75441-1", "BI15", 10, 3, 7, 6, 10),
    createData("Eclair", "LW-14815", "BK19", 0, 30, 0, 30, 5),
    createData("Cupcake", "79472000", "AH41", 0, 100, 20, 80, 20),
    createData("Gingerbread", "Brasso", "Flammable Stores", 0, 150, 40, 110, 20),
];

export default function DefaultStore() {
    
    return (
        <Fragment>
            <PrimarySearchBar action icon={<AddIcon />} label="Add Part" />
            <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 500 }}>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Description</StyledTableCell>
                            <StyledTableCell align="left">Part Number</StyledTableCell>
                            <StyledTableCell align="left">Location</StyledTableCell>
                            <StyledTableCell align="center">Initial Qty.</StyledTableCell>
                            <StyledTableCell align="center">Qty. Added</StyledTableCell>
                            <StyledTableCell align="center">Qty. Issued</StyledTableCell>
                            <StyledTableCell align="center">Qty. In Stock</StyledTableCell>
                            <StyledTableCell align="center">Reorder Level</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover key={row.part_number}>
                                <TableCell component="th" scope="row"> {row.description} </TableCell>
                                <TableCell align="left">{row.part_number}</TableCell>
                                <TableCell align="left">{row.location}</TableCell>
                                <TableCell align="center">{row.starting_quantity}</TableCell>
                                <TableCell align="center">{row.quantity_received}</TableCell>
                                <TableCell align="center">{row.quantity_issued}</TableCell>
                                <TableCell align="center">{row.quantity_on_hand}</TableCell>
                                <TableCell align="center">{row.reorder_level}</TableCell>
                                <TableCell align="center" style={{ padding: '0px' }}>
                                    {<ActionMenu row={row} />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}
