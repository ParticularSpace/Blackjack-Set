import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

const Dealer = ({ cards }) => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '100%', 
                m: 2, 
                p: 4, 
                bgcolor: 'transparent', 
                borderRadius: 1 
            }}
        >
            <Typography variant="h4" component="div">
                Dealer's Hand
            </Typography>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexWrap: 'wrap',
                    m: 2
                }}
            >
                {cards.map((card, index) => {
                    if (index === 0) {
                        // Replace the path below with the path to your card back image
                        return <Card key={index} card={'back'} />;
                    } else {
                        return <Card key={index} card={card} />;
                    }
                })}
            </Box>
        </Box>
    );
}

export default Dealer;
