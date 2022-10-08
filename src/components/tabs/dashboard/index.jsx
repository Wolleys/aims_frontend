import { NavLink } from 'react-router-dom';
import { Box, Tabs, Tab, Container } from '@mui/material';
import useCurrentPath from '../../../hooks/useCurrentPath';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const navItems = [
    { path: '/dashboard/overview', label: 'Overview', icon: BusinessCenterIcon },
    { path: '/dashboard/sales', label: 'Sales', icon: PointOfSaleIcon },
];

export default function DashboardTabs() {
    const activeItem = useCurrentPath(navItems);

    return (
        <Container maxWidth="fixed">
            <Box sx={{ width: '100%', }}>
                <Tabs value={activeItem?.label} centered
                    TabIndicatorProps={{ style: { display: 'none', top: "60px" } }}>
                    {navItems.map((item) => (
                        <Tab key={item.label} value={item.label} component={NavLink} to={item.path}
                            label={<span><item.icon /><br /> {item.label} </span>} sx={{ textTransform: 'none', }} wrapped />
                    ))}
                </Tabs>
            </Box>
        </Container>
    );
}