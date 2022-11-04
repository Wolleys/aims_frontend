import { Fragment, useContext } from "react";
import IssuePart from "../../forms/default/issuePart";
import { Card, CardContent, CardHeader, Typography, } from "@mui/material";
import { SelectedJobContext } from "../../../../../context/SelectedJobContextProvider";

function IssueContent() {
    const { selectedJob } = useContext(SelectedJobContext);

    const jobNo = <span>Job No: <span style={{ color: '#888' }}>{selectedJob.job_number}</span></span>
    const aircraftReg = <span>Aircraft Reg: <span style={{ color: '#888' }}>{selectedJob.aircraft_reg}</span></span>

    return (
        <Fragment>
            <Card elevation={0} >
                <CardHeader title={jobNo} titleTypographyProps={{ fontSize: '14px', fontWeight: '600' }}
                    action={<Typography sx={{ textTransform: 'none', fontSize: '14px', fontWeight: '600' }}>{aircraftReg}</Typography>}
                />
                <CardContent sx={{ mt: '0px' }}>
                    <IssuePart />

                </CardContent>
            </Card>
        </Fragment>
    );
};
export default IssueContent;
