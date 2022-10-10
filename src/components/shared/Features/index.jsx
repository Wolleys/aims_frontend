import { Fragment } from 'react';
import Copyright from "../Copyright";
import { essentialFeatures } from './essentialFeatures';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function Features() {
    return (
        <Fragment>
            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'left' } }} md={6}>
                <Typography >aims</Typography>
            </Box>
            <Box sx={{ ml: 0, pt: 14, display: { xs: 'none', md: 'flex' } }}>
                <Typography variant="h5" sx={{ color: '#03060b', fontWeight: 600, lineHeight: 1.5, mb: 0 }} >
                    AIMS - Features Dashboard
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Typography variant="subtitle2" sx={{ color: '#506176', fontWeight: 400, lineHeight: 1.6, fontSize: '14px' }}>
                    Manage all your aviation inventory with ease - anywhere, anytime.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: 3 }}>
                <List disablePadding>
                    {essentialFeatures.map((item) => (
                        <ListItem key={item.name} style={{ padding: '0px' }}>
                            <ListItemIcon>
                                <CheckCircleIcon style={{ color: '#27ab6e' }} fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item.label} primaryTypographyProps={{ color: '#03060b', fontWeight: 400, fontSize: '14px' }}
                                style={{ marginLeft: '-28px' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider sx={{ mb: 2, mt: 4 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Copyright />
            </Box>
        </Fragment>
    );
}

export default Features;