import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

const Player = ({ cards }) => {
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
                borderRadius: 1 
            }}
        >
            <Typography variant="h4" component="div">
                Player's Hand
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
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </Box>
        </Box>
    );
}

export default Player;
