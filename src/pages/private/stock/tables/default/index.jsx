import { parts } from "../../../data/parts";
import PurchaseHistory from "./purchaseHistory";
import PrimarySearchBar from '../../../../../components/shared/SearchBar/Primary';
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import StockRecords from '../../../../../components/shared/RecordsAndValue/StockRecords';
import { Table, TableRow, TableHead, TableBody } from "@mui/material";
import StyledTableContainer from '../../../../../components/shared/Table/StyledTableContainer';

export default function DefaultStore() {
    const length = parts.length;
    return (
        <>
            <PrimarySearchBar />
            <StyledTableContainer >
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
            </StyledTableContainer>
            <StockRecords length={length} data={parts} />
        </>
    );
}
