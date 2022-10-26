import { Fragment } from 'react';
import PurchaseHistory from "./purchaseHistory";
import PrimarySearchBar from '../../../../../components/shared/SearchBar/primary';
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer } from "@mui/material";

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
        history: [
            {
                date: "2020-01-05",
                company_name: "Palm Holdings",
                quantity_received: 20,
                shelf_life: "2 yrs",
                expiry_date: "2022-01-05",
                bp_in_foreign: 45,
                sp_in_foreign: 50,
            },
            {
                date: "2021-01-05",
                company_name: "Alx",
                quantity_received: 10,
                shelf_life: "2 yrs",
                expiry_date: "2022-01-05",
                bp_in_foreign: 25,
                sp_in_foreign: 35,
            },
        ],
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
            <PrimarySearchBar />
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
                            <StyledTableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <PurchaseHistory key={row.part_number} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}
