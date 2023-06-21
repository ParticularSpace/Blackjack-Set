import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            sx={{ 
                width: '100%', 
                position: 'fixed', 
                bottom: 0, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: 60, 
                bgcolor: 'primary.main', 
                color: 'white',
                p: 2
            }}
        >
            <Typography variant="body1">
                © 2023 Developed by Sam Jones. All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
