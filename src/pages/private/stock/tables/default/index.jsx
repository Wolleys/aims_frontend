import { parts } from "../../../data/parts";
import PurchaseHistory from "./purchaseHistory";
import RecordsAndValue from '../../../../../components/shared/RecordsAndValue';
import PrimarySearchBar from '../../../../../components/shared/SearchBar/Primary';
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import { Paper, Table, TableRow, TableHead, TableBody, TableContainer } from "@mui/material";

export default function DefaultStore() {
    const length = parts.length;
    return (
        <>
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
                            <StyledTableCell align="center">Selling Price ($)</StyledTableCell>
                            <StyledTableCell align="right">Value ($)</StyledTableCell>
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
            <RecordsAndValue length={length} data={parts} />
        </>
    );
}
