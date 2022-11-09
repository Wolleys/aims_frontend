import { useMemo } from "react";
import { Grid, Box } from "@mui/material";
import CloseJobDialog from "../CloseJobDialog";
import ExportBtn from "../FormsUI/Button/ExportBtn";
import DescriptionIcon from "@mui/icons-material/Description";
import { totalStockValue } from "../../../helpers/stockTotalValues";

const RecordsCloseExp = (props) => {
    const { length, closeJob, details } = props;
    const stockValue = useMemo(() => totalStockValue(details), [details]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }} >
            <Grid item xs={6} sm={4} md={6} >{
                (<div>
                    <span style={{ fontSize: '14px', color: '#888', margin: '0 50px 0 0' }}>Records: {length}</span>
                    <span style={{ fontSize: '14px', color: '#888' }}>Total Value: $ {stockValue}</span>
                </div>
                )}
            </Grid>
            <Grid item xs={6} sm={8} md={6} sx={{ textAlign: 'right' }} >
                <Box>
                    {closeJob}
                    {length > 0 ?
                        <ExportBtn sx={{ fontSize: "13.1px" }} startIcon={<DescriptionIcon />} > Export </ExportBtn>
                        : null
                    }
                </Box>
            </Grid>
            <Box sx={{ justifyContent: 'center', display: { xs: '12', md: 'flex' } }}>
                <Grid item sm={3} sx={{ textAlign: 'center', mt: 1 }}>
                    <CloseJobDialog />
                </Grid>
            </Box>
        </Grid>
    )
}

export default RecordsCloseExp;
