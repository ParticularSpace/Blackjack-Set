import React from 'react';

const Card = ({ suit, value }) => {
    return (
        <div className="card">
            <p>{value} of {suit}</p>
        </div>
    );
}

export default Card;
