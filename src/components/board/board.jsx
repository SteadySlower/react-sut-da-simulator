import React from 'react';
import Card from '../card/card';
import styles from './board.module.css';

const Board = ({ deck, onMyCardClick }) => {
    return (
        <div className={styles.board}>
            {Object.keys(deck).map(key => {
                return (
                    <Card
                        onMyCardClick={onMyCardClick}
                        card={deck[key]}
                    />
                )
            })}
        </div>
    )
}
export default Board;