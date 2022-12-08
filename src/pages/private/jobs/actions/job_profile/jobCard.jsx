import dayjs from "dayjs";
import { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";
import { Box, Card, CardContent, CardHeader, Divider, Typography, Button, Grid } from "@mui/material";

function JobCard(props) {
    const { item } = props;
    const { theme } = useContext(ThemeContext);

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

    const cardStyle = {
        borderRadius: "6px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    };

    const defaultProps = {
        sx: cardStyle,
        variant: "outlined",
    }

    const titleTypoProps = {
        fontSize: "16px",
        fontWeight: "600",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const nameTypoStyle = {
        fontWeight: 600,
        fontSize: "12px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    const detailsTypoStyle = (item) => ({
        float: "left",
        fontWeight: 400,
        fontSize: "12px",
        color: item.detail === "Opened" ? "#4caf50"
            : item.detail === "Closed" ? "#dc004e"
            : theme === "light" ? "#24292f" : "#c9d1d9",
    })

    const snagViewStyle = {
        fontSize: "12px",
        textTransform: "none", 
        color: theme === "light" ? "#0969da" : "#58a6ff", 

    }

    return (
        <>
            <Card {...defaultProps} >
                <CardHeader title="Job Card" titleTypographyProps={titleTypoProps} />
                <CardContent sx={{ mt: "-10px", height: "400px" }}>
                    {jobDetails().map((item) => (
                        <Box key={item.name} >
                            <Grid container spacing={0}>
                                <Grid item xs={6} md={6}>
                                    <Typography sx={nameTypoStyle}>
                                        {item.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <Typography sx={detailsTypoStyle(item)}>{item.detail} </Typography>
                                    <Box style={{ float: "right", margin: "-5px 0px -5px 0" }}>
                                        {item.name === "Snags recorded" && item.detail > 0 ?
                                            <Button size="small" sx={snagViewStyle}> 
                                                view
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