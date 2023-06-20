import React from 'react';

import GameBoard from '../components/GameBoard';
import Player from '../components/Player';
import Dealer from '../components/Dealer';

const Game = () => {
    return (
        <div>
            <GameBoard>
                <Dealer />
                <Player />
            </GameBoard>
        </div>
    );
}

export default Game;
