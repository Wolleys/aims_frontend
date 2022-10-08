import { NavLink } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import { Box, Tabs, Tab, Container } from '@mui/material';

function PartIssueTabs() {
    return (
        <Container maxWidth="fixed">
            <Box sx={{ width: '100%', }}>
                <Tabs value={'Default'} centered
                    TabIndicatorProps={{ sx: { display: 'none', top: "60px" } }}>
                    <Tab value='Default' component={NavLink} to='/parts-issue/default'
                        label={<span><StoreIcon /><br /> {'Default'} </span>} sx={{ textTransform: 'none', }} wrapped />
                </Tabs>
            </Box>
        </Container>
    )
}

export default PartIssueTabs;