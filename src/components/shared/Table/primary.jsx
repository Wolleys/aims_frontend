import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";
import StyledTableContainer from "./StyledTableContainer";
import { Table, TableRow, TableHead, TableBody } from "@mui/material";

export default function PrimaryTable(props) {
    const { data, columns } = props;

    return (
        <StyledTableContainer >
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
                        <StyledTableRow key={row.id}>
                            {columns?.map((col, index) => (
                                <StyledTableCell key={index} align={col.align} style={col.style} > {row[col.value]} </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            {data ? null : <p>No data found</p>}
        </StyledTableContainer>
    );
}
