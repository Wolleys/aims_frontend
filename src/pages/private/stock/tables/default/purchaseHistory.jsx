import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { history } from "../../../data/history";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";
import StyledTableRow from "../../../../../components/shared/Table/StyledTableRow";
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import HistoryStyledTableRow from "../../../../../components/shared/Table/HistoryStyledTableRow";
import {
    Box, Table, TableRow, TableHead, TableBody, TableCell, Collapse, Typography, IconButton, Link, Button
} from "@mui/material";

export default function PurchaseHistory(props) {
    const { row } = props;
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    const [selectedID, setSelectedID] = useState(null);

    const rowStyle = {
        "& > *": { borderBottom: "unset" },
        cursor: "pointer",
    }

    const iconStyle = {
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    const historyTableCellSx = {
        borderBottom: !open ? "unset" : null,
    }

    const historyTableCellStyle = {
        paddingBottom: 0,
        paddingTop: 0,
        borderBottom: open && selectedID === row.id && theme === "light" ? "1px solid #d0d7de"
            : open && selectedID === row.id && theme === "dark" ? "1px solid #30363d"
            : null,
    }

    const typographyStyle = {
        fontWeight: 600,
        fontSize: 14,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const handleOpenRow = () => {
        setOpen(!open)
    }

    const handleSelectedRow = (row) => {
        setSelectedID(row);
    }


    const showMore = () => { navigate(`/part-entry/default/purchase-history/${row.id}`) }

    return (
        <>
            <StyledTableRow sx={rowStyle} selected={open ? selectedID === row.id : null}
                onClick={() => { handleOpenRow(); handleSelectedRow(row.id); }} >
                <StyledTableCell align="left"> {row.description} </StyledTableCell>
                <StyledTableCell align="left">{row.part_number}</StyledTableCell>
                <StyledTableCell align="left">{row.location}</StyledTableCell>
                <StyledTableCell align="center">{row.starting_quantity}</StyledTableCell>
                <StyledTableCell align="center">{row.quantity_received}</StyledTableCell>
                <StyledTableCell align="center">{row.quantity_issued}</StyledTableCell>
                <StyledTableCell align="center">{row.quantity_on_hand}</StyledTableCell>
                <StyledTableCell align="center">{row.sp_in_foreign}</StyledTableCell>
                <StyledTableCell align="center">{(row.quantity_on_hand * row.sp_in_foreign).toFixed(2)}</StyledTableCell>
                <StyledTableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)} >
                        {open ? <KeyboardArrowUpIcon sx={iconStyle} /> : <KeyboardArrowDownIcon sx={iconStyle} />}
                    </IconButton>
                </StyledTableCell>
            </StyledTableRow>
            <TableRow>
                <TableCell style={historyTableCellStyle} colSpan={10} sx={historyTableCellSx}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography gutterBottom sx={typographyStyle}> Purchase History </Typography>
                            <Table size="small" sx={{
                                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d"
                            }}>
                                <TableHead>
                                    <TableRow >
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
                                    {history.slice(0, 3).map((row) => (
                                        <HistoryStyledTableRow key={row.id}>
                                            <StyledTableCell component="th" scope="row"> {row.date} </StyledTableCell>
                                            <StyledTableCell>{row.company_name}</StyledTableCell>
                                            <StyledTableCell>{row.quantity_received}</StyledTableCell>
                                            <StyledTableCell>{row.shelf_life}</StyledTableCell>
                                            <StyledTableCell>{row.expiry_date}</StyledTableCell>
                                            <StyledTableCell align="center">{row.bp_in_foreign}</StyledTableCell>
                                            <StyledTableCell align="center">{row.sp_in_foreign}</StyledTableCell>
                                            <StyledTableCell align="right"> {Math.round(row.bp_in_foreign * row.quantity_received)} </StyledTableCell>
                                        </HistoryStyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {history.length > 3 ?
                                <Button component={Link} onClick={showMore} sx={{
                                    textTransform: "none", float: "right", mt: 0.5, mb: 0.5
                                }}>Show more
                                </Button>
                                : null
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
