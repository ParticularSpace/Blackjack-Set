import React from 'react';

// Components
import Card from './Card';

const GameBoard = ({ children }) => {
    return (
        <div>
            <h2>Game Board</h2>
            <div className="dealer-hand">
                <h3>Dealer's Hand:</h3>
                <Card />
            </div>
            <div className="player-hand">
                <h3>Player's Hand:</h3>
                <Card />
            </div>
            {children}
        </div>
    );
}

export default GameBoard;
