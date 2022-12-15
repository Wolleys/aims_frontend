import Layout from "../Layout";
import StyledTab from "../StyledTab";
import StyledTabs from "../StyledTabs";
import StoreIcon from "@mui/icons-material/Store";

function PartEntryTabs() {
    return (
        <Layout>
            <StyledTabs value={"Default"} >
                <StyledTab value="Default" to="/part-entry/default"
                    label={<span><StoreIcon /><br /> {"Default"} </span>} />
            </StyledTabs>
        </Layout>
    )
}

export default PartEntryTabs;