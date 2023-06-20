import React from 'react';

const Chip = ({ value, handleClick }) => {
    return (
        <button className="chip" onClick={handleClick}>
            ${value}
        </button>
    );
}

export default Chip;
