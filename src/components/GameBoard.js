import React, { useState, useEffect } from 'react';
import Dealer from './Dealer';
import Player from './Player';
import { Box, Typography, Button } from '@mui/material';

const suits = ['heart', 'diamond', 'spade', 'club'];
const values = ['2_', '3_', '4_', '5_', '6_', '7_', '8_', '9_', '10_', 'J_', 'Q_', 'K_', 'A_'];

// Calculate hand value
const calculateHandValue = (hand) => {
    let value = 0;
    let aces = 0;

    hand.forEach(card => {
        let cardValue = card.slice(0, -1);  // Get the card's value (not the suit)

        if (cardValue === 'A') {
            value += 11;
            aces += 1;
        } else if (['K', 'Q', 'J'].includes(cardValue)) {
            value += 10;
        } else {
            value += parseInt(cardValue, 10);
        }
    });

    while (value > 21 && aces > 0) {
        value -= 10;  // Count Ace as 1 instead of 11
        aces -= 1;
    }

    return value;
}

const GameBoard = () => {
    const [deck, setDeck] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [bet, setBet] = useState(0);
    const [playerStanding, setPlayerStanding] = useState(false);

    useEffect(() => {
        const newDeck = createDeck();
        setDeck(newDeck);
    }, []);

    useEffect(() => {
        if (playerStanding && calculateHandValue(dealerHand) < 17) {
            dealerHit();
        }
    }, [playerStanding, dealerHand]);


    // Create a new deck of cards
    const createDeck = () => {
        let deck = [];

        for (let suit of suits) {
            for (let value of values) {
                deck.push(value + suit);
            }
        }

        // Shuffle the deck
        deck.sort(() => Math.random() - 0.5);

        return deck;
    }

    // Deal initial cards
    const dealInitialCards = () => {
        let newDeck = [...deck];

        const newDealerHand = [newDeck.pop(), newDeck.pop()];
        const newPlayerHand = [newDeck.pop(), newDeck.pop()];

        setDeck(newDeck);
        setDealerHand(newDealerHand);
        setPlayerHand(newPlayerHand);
    }

    // Player actions
    const playerHit = () => {
        let newDeck = [...deck];
        let newPlayerHand = [...playerHand];

        newPlayerHand.push(newDeck.pop());

        setDeck(newDeck);
        setPlayerHand(newPlayerHand);
    }

    const playerStand = () => {
        setPlayerStanding(true);
    }

    const dealerHit = () => {
        let newDeck = [...deck];
        let newDealerHand = [...dealerHand];

        newDealerHand.push(newDeck.pop());

        setDeck(newDeck);
        setDealerHand(newDealerHand);
    }

    const playerDoubleDown = () => {
        let newDeck = [...deck];
        let newPlayerHand = [...playerHand];
        let newBet = bet * 2;

        newPlayerHand.push(newDeck.pop());

        setDeck(newDeck);
        setPlayerHand(newPlayerHand);
        setBet(newBet);
    }

    const dealerTurn = () => {
        let newDeck = [...deck];
        let newDealerHand = [...dealerHand];
        let dealerHandValue = calculateHandValue(newDealerHand);

        while (dealerHandValue < 17) {
            newDealerHand.push(newDeck.pop());
            dealerHandValue = calculateHandValue(newDealerHand);
        }

        setDeck(newDeck);
        setDealerHand(newDealerHand);

        determineWinner();
    }

    const determineWinner = () => {
        const playerValue = calculateHandValue(playerHand);
        const dealerValue = calculateHandValue(dealerHand);

        if (playerValue > 21) {
            console.log("Player busts!");
        } else if (dealerValue > 21) {
            console.log("Dealer busts!");
        } else if (playerValue > dealerValue) {
            console.log("Player wins!");
        } else if (dealerValue > playerValue) {
            console.log("Dealer wins!");
        } else {
            console.log("It's a push!");
        }
    }

    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                width: '100%', 
                height: '75vh', 
                maxWidth: '100vw', 
                bgcolor: 'green', 
                p: 4, 
            }}
        >
            <Dealer cards={dealerHand} handValue={calculateHandValue(dealerHand)} />
            <Player cards={playerHand} handValue={calculateHandValue(playerHand)} />
            <Box>
                <Typography variant="h6">
                    Bet: ${bet}
                </Typography>
                <input
                    type="number"
                    value={bet}
                    onChange={(e) => setBet(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={dealInitialCards}>
                    Start Game
                </Button>
                <Button variant="contained" color="primary" onClick={playerHit}>
                    Hit
                </Button>
                <Button variant="contained" color="primary" onClick={playerStand}>
                    Stand
                </Button>
                <Button variant="contained" color="primary" onClick={playerDoubleDown}>
                    Double Down
                </Button>
            </Box>
        </Box>
    );
}

export default GameBoard;
