import Layout from "../Layout";
import StyledTab from "../StyledTab";
import StyledTabs from "../StyledTabs";
import StorefrontIcon from "@mui/icons-material/Storefront";

function StockTabs() {
    return (
        <Layout>
            <StyledTabs value={"Default"} >
                <StyledTab value="Default" to="/stock/default"
                    label={<span><StorefrontIcon /><br /> {"Default"} </span>} />
            </StyledTabs>
        </Layout>
    )
}

export default StockTabs;