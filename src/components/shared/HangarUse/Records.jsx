import { useMemo } from "react";
import { Grid } from "@mui/material";
import { totalStockValue } from "../../../helpers/stockTotalValues";

const Records = (props) => {
    const { length, data } = props;
    const stockValue = useMemo(() => totalStockValue(data), [data]);

    return (
        <Grid container sx={{ mt: 1, pr: 2, pl: 2 }} >
            <Grid item xs={6} sm={4} md={6} >{
                (<div>
                    <span style={{ fontSize: '14px', color: '#888', margin: '0 50px 0 0' }}>Records: {length}</span>
                    <span style={{ fontSize: '14px', color: '#888' }}>Total Value: $ {stockValue}</span>
                </div>
                )}
            </Grid>
        </Grid>
    )
}

export default Records;
