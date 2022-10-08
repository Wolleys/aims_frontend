import { NavLink } from 'react-router-dom';
import { Box, Tabs, Tab, Container } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';

function StockTabs() {
    return (
        <Container maxWidth="fixed">
            <Box sx={{ width: '100%', }}>
                <Tabs value={'Default'} centered
                    TabIndicatorProps={{ sx: { display: 'none', top: "60px" } }}>
                    <Tab value='Default' component={NavLink} to='/stock/default'
                        label={<span><StorefrontIcon /><br /> {'Default'} </span>} sx={{ textTransform: 'none', }} wrapped />
                </Tabs>
            </Box>
        </Container>
    )
}

export default StockTabs;