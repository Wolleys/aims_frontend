import { Fragment } from 'react';
import { parts } from "../../../data/parts";
import PurchaseHistory from "./purchaseHistory";
import PrimarySearchBar from '../../../../../components/shared/SearchBar/primary';
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer } from "@mui/material";

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
                        {parts.map((row) => (
                            <PurchaseHistory key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}
