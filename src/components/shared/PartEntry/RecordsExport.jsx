import { useMemo } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { totalPurchaseValue, totalQtyReceived } from "../../../helpers/stockTotalValues";

function RecordsExport(props) {
    const { length, history } = props;
    const purchaseValue = useMemo(() => totalPurchaseValue(history), [history]);
    const qtyRecieved = useMemo(() => totalQtyReceived(history), [history]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: { xs: 1, sm: 1 } }}>
                <Box sx={{ mt: 0.5 }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#888",
                            margin: { xs: "0", sm: "0 50px 0 0" },
                            float: "left",
                        }}
                    >
                        Records: {length}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#888",
                            float: { xs: "right", sm: "left" },
                        }}
                    >
                        Qty Received: {qtyRecieved}
                    </Typography>

                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right" }}>
                <Box sx={{ mt: 0.5 }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#888",
                            margin: { xs: "0", sm: "0 10rem 0 0" },
                            float: { xs: "left", sm: "none" }
                        }}
                    >
                        Value: ${purchaseValue}
                    </Typography>
                    {length > 0 ?
                        <Button
                            size="small"
                            sx={{
                                textTransform: "none",
                                float: { xs: "right", sm: "none" },
                                margin: { xs: "-0.4rem 0 0 0", sm: "-2.5rem 0 0 0" },
                            }}
                            startIcon={<DescriptionIcon />}
                        >
                            Export
                        </Button>
                        : null
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default RecordsExport;
