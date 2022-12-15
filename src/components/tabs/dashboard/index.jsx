import Layout from "../Layout";
import StyledTab from "../StyledTab";
import StyledTabs from "../StyledTabs";
import useCurrentPath from "../../../hooks/useCurrentPath";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const navItems = [
    { path: "/dashboard/overview", label: "Overview", icon: BusinessCenterIcon },
    { path: "/dashboard/sales", label: "Sales", icon: PointOfSaleIcon },
];

export default function DashboardTabs() {
    const activeItem = useCurrentPath(navItems);

    return (
        <Layout>
            <StyledTabs value={activeItem?.label} >
                {navItems.map((item) => (
                    <StyledTab key={item.label} value={item.label} to={item.path}
                        label={<span><item.icon /><br />{item.label}</span>} />
                ))}
            </StyledTabs>
        </Layout>
    );
}