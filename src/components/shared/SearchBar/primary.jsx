import { Grid } from "@mui/material";
import SearchTextField from "../FormsUI/Search";
import ActionBtn from "../FormsUI/Button/ActionBtn";
import ExportBtn from "../FormsUI/Button/ExportBtn";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function PrimarySearchBar(props) {
    const { action, label, icon, navigate } = props;

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>
                <SearchTextField sx={{ mt: 0, mb: { xs: 0, sm: 1 }, width: { xs: "100%", sm: "auto" } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "right", mt: { xs: -0.5, sm: 0.5 }, mb: { xs: 1 } }}>
                {action &&
                    <ActionBtn onClick={navigate} sx={{ mr: 1, fontSize: "13.1px" }} startIcon={icon} >
                        {label}
                    </ActionBtn>
                }
                <ExportBtn sx={{ fontSize: "13.1px" }} startIcon={<FileDownloadOutlinedIcon />} > Export </ExportBtn>
            </Grid>
        </Grid>
    );
}
