import { useState, Fragment } from 'react';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    Box, Table, TableRow, TableHead, TableBody, TableCell, Collapse, Typography, IconButton,
    styled, tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function PurchaseHistory(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" }, cursor: "pointer" }} 
                onClick={() => { setOpen(!open) }} >
                <TableCell component="th" scope="row"> {row.description} </TableCell>
                <TableCell align="left">{row.part_number}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="center">{row.starting_quantity}</TableCell>
                <TableCell align="center">{row.quantity_received}</TableCell>
                <TableCell align="center">{row.quantity_issued}</TableCell>
                <TableCell align="center">{row.quantity_on_hand}</TableCell>
                <TableCell align="center">{row.reorder_level}</TableCell>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9} sx={{ borderBottom: !open ? "unset" : null }}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="subtitle2" gutterBottom component="div" sx={{ fontWeight: "bold" }}>
                                Purchase History
                            </Typography>
                            <Table size="small" aria-label="stock">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Purchase Date</StyledTableCell>
                                        <StyledTableCell>Supllier</StyledTableCell>
                                        <StyledTableCell>Received</StyledTableCell>
                                        <StyledTableCell>Shelf life</StyledTableCell>
                                        <StyledTableCell>Expiry Date</StyledTableCell>
                                        <StyledTableCell align="center">Buying Price ($)</StyledTableCell>
                                        <StyledTableCell align="center">Selling Price ($)</StyledTableCell>
                                        <StyledTableCell align="right">Value ($)</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((row) => (
                                        <StyledTableRow key={row.date}>
                                            <StyledTableCell component="th" scope="row"> {row.date} </StyledTableCell>
                                            <StyledTableCell>{row.company_name}</StyledTableCell>
                                            <StyledTableCell>{row.quantity_received}</StyledTableCell>
                                            <StyledTableCell>{row.shelf_life}</StyledTableCell>
                                            <StyledTableCell>{row.expiry_date}</StyledTableCell>
                                            <StyledTableCell align="center">{row.bp_in_foreign}</StyledTableCell>
                                            <StyledTableCell align="center">{row.sp_in_foreign}</StyledTableCell>
                                            <StyledTableCell align="right"> {Math.round(row.bp_in_foreign * row.quantity_received)} </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}
