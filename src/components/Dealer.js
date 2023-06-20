import React from 'react';
import Card from './Card';

const Dealer = () => {
    return (
        <div className="dealer">
            <h2>Dealer</h2>
            <div className="dealer-hand">
                <Card suit="hearts" value="K" />  {/* Example placeholder card */}
            </div>
        </div>
    );
}

export default Dealer;
