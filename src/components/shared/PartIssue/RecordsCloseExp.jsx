import { useMemo, useContext } from "react";
import CloseJobDialog from "../CloseJobDialog";
import ExportBtn from "../FormsUI/Button/ExportBtn";
import { Grid, Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { totalStockValue } from "../../../helpers/stockTotalValues";
import { ThemeContext } from "../../../context/ThemeContextProvider";

const RecordsCloseExp = (props) => {
    const { theme } = useContext(ThemeContext);
    const { length, closeJob, details } = props;
    const stockValue = useMemo(() => totalStockValue(details), [details]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }}>
            <Grid item xs={12} sm={6} md={6} sx={{ mb: { xs: 1, sm: 1 } }}>
                {
                    <Box sx={{ mt: 0.5 }}>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: theme === "light" ? "#57606a" : "#8b949e",
                                margin: { xs: "0", sm: "0 50px 0 0" },
                                float: "left",
                            }}
                        >
                            Records: {length}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: theme === "light" ? "#57606a" : "#8b949e",
                                float: { xs: "right", sm: "left" },
                            }}
                        >
                            Value: ${stockValue}
                        </Typography>
                    </Box>
                }
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right" }}>
                <Box sx={{ mt: 0.5 }}>
                    {closeJob}
                    {length > 0 ? (
                        <ExportBtn
                            sx={{ fontSize: "13.1px" }}
                            startIcon={<DescriptionIcon />}
                        >
                            Export
                        </ExportBtn>
                    ) : null}
                </Box>
            </Grid>
            <Box sx={{ justifyContent: "center", display: { xs: "12", md: "flex" } }}>
                <Grid item sm={3} sx={{ textAlign: "center", mt: 1 }}>
                    <CloseJobDialog />
                </Grid>
            </Box>
        </Grid>
    );
};

export default RecordsCloseExp;
