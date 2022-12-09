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
                        {columns?.length > 0 ? (
                            columns?.map((head) => (
                                <StyledTableCell align={head.align} key={head.value}> {head.label} </StyledTableCell>
                            ))
                        ) : (
                            <StyledTableCell colSpan="100%" sx={{ textAlign: "center" }}>
                                <p>No table heads found!</p>
                            </StyledTableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.length > 0 ? (
                        data?.map((row) => (
                            <StyledTableRow key={row.id}>
                                {columns?.map((col, index) => (
                                    <StyledTableCell key={index} align={col.align} style={col.style} > {row[col.value]} </StyledTableCell>
                                ))}
                            </StyledTableRow>
                        ))
                    ) : (
                        <StyledTableRow>
                            <StyledTableCell colSpan="100%" sx={{ textAlign: "center", py: 6 }}>
                                <p>No data found</p>
                            </StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
}
