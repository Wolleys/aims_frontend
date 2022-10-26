import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MoreEditDel from '../../../../components/shared/ActionMenu/MoreEditDel';
import PrimarySearchBar from '../../../../components/shared/SearchBar/primary';
import StyledTableCell from "../../../../components/shared/Table/StyledTableCell";
import { Paper, Table, TableRow, TableHead, TableBody, TableCell, TableContainer } from "@mui/material";

function createData(id, date_opened, job_number, aircraft_reg, aircraft_type, job_status) {
    return {
        id,
        date_opened,
        job_number,
        aircraft_reg,
        aircraft_type,
        job_status,
    };
}

const rows = [
    createData(1, "23-Nov-2021", "002/2021", "5Y-BWE", "CESSNA 172L", "Opened"),
    createData(2, "14-Nov-2021", "001/2021", "5Y-BCZ", "RALLYE 235E", "Opened"),
];

export default function JobsList() {
    const navigate = useNavigate();

    //Links
    const openJob = () => navigate("/jobs/open-job");
    const handleView = (row) => navigate(`/jobs/job-profile/${row.id}`);
    const handleEdit = (row) => navigate(`/jobs/edit-job/${row.id}`);

    return (
        <Fragment>
            <PrimarySearchBar action icon={<LockOpenIcon />} label="Open Job" navigate={openJob} />
            <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 500 }}>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Date Opened</StyledTableCell>
                            <StyledTableCell align="left">Job Number</StyledTableCell>
                            <StyledTableCell align="left">Aircraft Registration</StyledTableCell>
                            <StyledTableCell align="left">Aircraft Type</StyledTableCell>
                            <StyledTableCell align="left">Job Status</StyledTableCell>
                            <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover key={row.id}>
                                <TableCell align="left" scope="row"> {row.date_opened} </TableCell>
                                <TableCell align="left">{row.job_number}</TableCell>
                                <TableCell align="left">{row.aircraft_reg}</TableCell>
                                <TableCell align="left">{row.aircraft_type}</TableCell>
                                <TableCell align="left" style={{ color: row.job_status === "Opened" ? '#4caf50' : '#dc004e' }}>
                                    {row.job_status}
                                </TableCell>
                                <TableCell align="center" style={{ padding: '0px' }}>
                                    {<MoreEditDel row={row} handleView={handleView} handleEdit={handleEdit} />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}
