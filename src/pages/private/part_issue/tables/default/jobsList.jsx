import { jobs } from "../../../data/jobs";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";
import StyledTableRow from "../../../../../components/shared/Table/StyledTableRow";
import StyledTableCell from "../../../../../components/shared/Table/StyledTableCell";
import { Table, TableRow, TableHead, TableBody, Typography, Box } from "@mui/material";
import { SelectedJobContext } from "../../../../../context/SelectedJobContextProvider";
import StyledTableContainer from "../../../../../components/shared/Table/StyledTableContainer";

export default function JobsList() {
    const { theme } = useContext(ThemeContext);
    const { setSelectedJob } = useContext(SelectedJobContext);
    const [clickedRow, setClickedRow] = useState(false);
    const [selectedID, setSelectedID] = useState(null);

    const OpenedJobs = jobs.filter((item) => item.job_status === "Opened")
    const ClosedJobs = jobs.filter((item) => item.job_status === "Closed")

    const handleSelectedRow = (row) => (event) => {
        setSelectedID(row);
        setClickedRow(true);
        const { target } = event;
        const jobIndex = target.getAttribute("jobindex");
        const selectedJob = jobs[jobIndex];
        setSelectedJob(selectedJob);
    }

    const dataBoxStyle = {
        display: "flex",
        fontWeight: 500,
        fontSize: "13px",
        color: theme === "light" ? "#24292f" : "#c9d1d9"
    }

    const spanStyle = {
        color: theme === "light" ? "#57606a" : "#8b949e"
    }

    return (
        <Box sx={{ height: "500px", position: "relative" }}>
            <StyledTableContainer sx={{ height: 450, overflow: "auto" }} >
                <Table size="small" stickyHeader>
                    <TableHead >
                        <TableRow >
                            <StyledTableCell align="left">Job No</StyledTableCell>
                            <StyledTableCell align="left">A/C Reg</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jobs.length > 0 ? (
                            jobs.map((row, index) => (
                                <StyledTableRow key={row.id} onClick={handleSelectedRow(row.id)} style={{ cursor: "pointer" }}
                                    selected={clickedRow ? selectedID === row.id : null}>
                                    <StyledTableCell jobindex={index} align="left">{row.job_number}</StyledTableCell>
                                    <StyledTableCell jobindex={index} align="left">{row.aircraft_reg}</StyledTableCell>
                                    <StyledTableCell jobindex={index} align="left" style={{ color: row.job_status === "Opened" ? "#4caf50" : "#dc004e" }}>
                                        {row.job_status}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                        ) : (
                            <StyledTableRow>
                                <StyledTableCell colSpan={4} sx={{ textAlign: "center", border: "none", py: 6 }}>
                                    <Typography sx={{ py: 6, fontSize: "14px" }} >{"We'll first need to get some data in here!"}</Typography>
                                </StyledTableCell>
                            </StyledTableRow>
                        )}
                    </TableBody>
                </Table>
            </StyledTableContainer>
            <div style={{ width: "100%", cursor: "default", position: "absolute", bottom: "0px" }}>
                <Box sx={dataBoxStyle}>
                    <Box p={1} flexGrow={1}> Jobs: <span style={spanStyle}>{jobs.length}</span></Box>
                    <Box p={1} flexGrow={1}> Closed: <span style={spanStyle}>{ClosedJobs.length}</span></Box>
                    <Box p={1}> Opened: <span style={spanStyle}>{OpenedJobs.length}</span></Box>
                </Box>
            </div>
        </Box>
    );
}
