import React from 'react';
import { Box } from '@mui/material';

const Card = ({ card }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 1 }}>
            <img src={`/images/fullDeck/${card}.png`} alt={card} className="card-img" />
        </Box>
    );
}

export default Card;
