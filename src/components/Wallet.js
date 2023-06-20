import React from 'react';

const Wallet = ({ balance }) => {
    return (
        <div className="wallet">
            <h2>Wallet</h2>
            <p>Balance: ${balance}</p>
            {/* Add controls for placing bets if necessary */}
        </div>
    );
}

export default Wallet;
