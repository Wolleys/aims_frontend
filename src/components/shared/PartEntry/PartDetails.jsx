import { Grid, Typography, Box } from "@mui/material";

function PartDetails(props) {
    const { part } = props;

    return (
        <Grid container>
            {part?.map((row) => (
                <Grid item key={row.id} xs={12} sm={12} md={12}>
                    <Box
                        sx={{
                            display: { xs: "grid", sm: "none", md: "none" },
                            mt: 0.5,
                            mb: 1,
                        }}
                    >
                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                            Description: {""}
                            <span style={{ fontSize: "14px", color: "#888" }}>
                                {row.description}
                            </span>
                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                            Part No: {""}
                            <span style={{ fontSize: "14px", color: "#888" }}>
                                {row.part_number}
                            </span>
                        </Typography>
                    </Box>

                    <Typography
                        gutterBottom
                        sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            mb: 0.5,
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        Description:
                        <span
                            style={{ fontSize: "14px", color: "#888", margin: "0 40px 0 0" }}
                        >
                            {row.description}
                        </span>
                        Part No:
                        <span style={{ fontSize: "14px", color: "#888" }}>
                            {row.part_number}
                        </span>
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
}

export default PartDetails;
