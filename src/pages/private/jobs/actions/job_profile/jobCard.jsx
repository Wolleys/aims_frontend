import dayjs from "dayjs";
import { Box, Card, CardContent, CardHeader, Divider, Typography, Button, Grid } from "@mui/material";

function JobCard(props) {
    const { item } = props;
    const jobStatus = item.job_status;
    const dateFrom = dayjs(item.date_opened);
    const dateTill = dayjs(item.date_closed);
    const difference = dateTill.diff(dateFrom, "day")
    const client_name = item.first_name + " " + item.last_name;

    const jobDetails = () => {
        var jobData = [
            { name: "Date opened", detail: dayjs(item.date_opened).format("DD-MMM-YYYY") },
            { name: "Job number", detail: item.job_number },
            { name: "Client", detail: client_name },
            { name: "Aircraft reg", detail: item.aircraft_reg },
            { name: "Aircraft type", detail: item.aircraft_type },
            { name: "Job status", detail: item.job_status },
            { name: "Snags recorded", detail: 2 },
        ]
        if (jobStatus === "Closed") {
            jobData.push(
                { name: "Date closed", detail: dayjs(item.date_closed).format("DD-MMM-YYYY") },
                { name: "Job duration", detail: difference + " days" }
            );
        }
        return jobData;
    }

    return (
        <>
            <Card sx={{ borderRadius: "6px" }} variant="outlined" >
                <CardHeader title="Job Card"
                    titleTypographyProps={{ fontSize: "16px", fontWeight: "600" }} />
                <CardContent sx={{ mt: "-10px", height: "400px" }}>
                    {jobDetails().map((item) => (
                        <Box key={item.name} >
                            <Grid container spacing={0}>
                                <Grid item xs={6} md={6}>
                                    <Typography style={{ color: "#03060b", fontWeight: 500, fontSize: "13px", }}>
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography style={{
                                        color: item.detail === "Opened" ? "#4caf50"
                                            : item.detail === "Closed" ? "#dc004e" : "#506176",
                                        fontWeight: 400, fontSize: "13px", float: "left",
                                    }}>{item.detail} </Typography>
                                    <Box style={{ float: "right", margin: "-5px 0px -5px 0" }}>
                                        {item.name === "Snags recorded" && item.detail > 0 ?
                                            <Button size="small"
                                                sx={{ textTransform: "none", color: "#5046e4", fontSize: "13px" }}> view
                                            </Button> : null
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider sx={{ mb: 1, mt: 1 }} />
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </>
    )
}

export default JobCard