import React from 'react';

const PlayerNumberButton = ({ playerNumber, onPlayerNumberButtonClick }) => {
    const onClick = () => {
        onPlayerNumberButtonClick(playerNumber)
    }
    return (
        <button onClick={onClick}>
            {playerNumber}명
        </button>
    )
}

export default PlayerNumberButton;