import { Fragment, useContext, useState } from 'react';
import { jobs } from '../../../data/jobs';
import {
    Paper, Table, TableRow, TableHead, TableBody, TableCell, tableCellClasses,
    TableContainer, styled, Typography, Divider, Box
} from '@mui/material';
import { SelectedJobContext } from '../../../../../context/SelectedJobContextProvider';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#EBEBEB",
        color: theme.palette.text.primary,
        fontSize: 14, paddingTop: '5px', paddingBottom: '5px',
        fontWeight: '500', cursor: 'default',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function JobsList() {
    const { setSelectedJob } = useContext(SelectedJobContext);
    const [clickedRow, setClickedRowIndex] = useState(null);

    const OpenedJobs = jobs.filter((item) => item.job_status === "Opened")
    const ClosedJobs = jobs.filter((item) => item.job_status === "Closed")

    const handleSelection = (rowIndex) => (event) => {
        if (clickedRow !== rowIndex) {
            setClickedRowIndex(rowIndex);
        } else {
            setClickedRowIndex(rowIndex);
        }
        const { target } = event;
        const jobIndex = target.getAttribute("jobindex");
        const selectedJob = jobs[jobIndex];
        setSelectedJob(selectedJob);
    }

    return (
        <Fragment>
            <TableContainer component={Paper} elevation={0} sx={{ height: 400, overflow: "auto" }}>
                <Table size="small" stickyHeader>
                    <TableHead >
                        <TableRow >
                            <StyledTableCell align="left">Job No</StyledTableCell>
                            <StyledTableCell align="left">Air. Reg</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.length > 0 ? (
                            jobs.map((row, index) => (
                                <TableRow key={row.id} hover onClick={handleSelection(index)} style={{ cursor: 'pointer', fontSize: '10px' }}
                                    className={clickedRow === index ? "selected_row" : null}>
                                    <TableCell jobindex={index} align="left">{row.job_number}</TableCell>
                                    <TableCell jobindex={index} align="left">{row.aircraft_reg}</TableCell>
                                    <TableCell jobindex={index} align="left" style={{ color: row.job_status === "Opened" ? '#4caf50' : '#dc004e' }}>
                                        {row.job_status}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={9} sx={{ textAlign: 'center', border: 'none', py: 6 }}>
                                    <Typography sx={{ py: 6, fontSize: '14px' }} >{jobs.error || "We'll first need to get some data in here!"}</Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider sx={{ mb: 0, mt: 0 }} />
            <div style={{ width: '100%', cursor: 'default' }}>
                <Box display="flex" bgcolor="background.paper" style={{ fontSize: '13.4px', fontWeight: 500, marginTop: '0px' }}>
                    <Box p={1} flexGrow={1} bgcolor="#f5f5f5"> Jobs: <span style={{ color: '#888' }}>{jobs.length}</span></Box>
                    <Box p={1} flexGrow={1} bgcolor="#f5f5f5"> Closed: <span style={{ color: '#888' }}>{ClosedJobs.length}</span></Box>
                    <Box p={1} bgcolor="#f5f5f5"> Opened: <span style={{ color: '#888' }}>{OpenedJobs.length}</span></Box>
                </Box>
            </div>
        </Fragment>
    );
}
