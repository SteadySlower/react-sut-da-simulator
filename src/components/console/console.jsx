import React from 'react';
import PlayerNumberButton from '../player-number-button/player-number-button';
import styles from './console.module.css'

const Console = ({ peopleOption, onPlayerNumberButtonClick }) => {
    return (
        <div className={styles.console}>
             {peopleOption.map(num => {
                return <PlayerNumberButton
                            playerNumber={num}
                            onPlayerNumberButtonClick={onPlayerNumberButtonClick}
                        />
             })}
        </div>
    )
}

export default Console;

