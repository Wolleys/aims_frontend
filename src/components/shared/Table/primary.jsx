import StyledTableCell from "./StyledTableCell";
import { Paper, Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from "@mui/material";

export default function PrimaryTable(props) {
    const { data, columns } = props;

    return (
        <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 500 }}>
            <Table size="small" stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns?.map((head) => (
                            <StyledTableCell align={head.align} key={head.value}> {head.label} </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((row) => (
                        <TableRow hover key={row.id}>
                            {columns?.map((col, index) => (
                                <TableCell key={index} align={col.align} style={col.style} > {row[col.value]} </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {data ? null : <p>No data found</p>}
        </TableContainer>
    );
}
