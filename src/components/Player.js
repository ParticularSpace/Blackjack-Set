import React from 'react';
import Card from './Card';

const Player = () => {
    return (
        <div className="player">
            <h2>Player</h2>
            <div className="player-hand">
                <Card suit="clubs" value="A" />  {/* Example placeholder card */}
            </div>
            <div className="controls">
                <button>Hit</button>
                <button>Stand</button>
                <button>Double Down</button>
                {/* Add other controls as needed */}
            </div>
        </div>
    );
}

export default Player;
