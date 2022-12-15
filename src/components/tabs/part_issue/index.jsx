import Layout from "../Layout";
import StyledTab from "../StyledTab";
import StyledTabs from "../StyledTabs";
import StoreIcon from "@mui/icons-material/Store";

function PartIssueTabs() {
    return (
        <Layout>
            <StyledTabs value={"Default"} >
                <StyledTab value="Default" to="/part-issue/default"
                    label={<span><StoreIcon /><br /> {"Default"} </span>} />
            </StyledTabs>
        </Layout>
    )
}

export default PartIssueTabs;