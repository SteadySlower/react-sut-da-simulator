import React from 'react';
import styles from './card.module.css';

const Card = ({ card, onMyCardClick }) => {
    const onClick = () => {
        onMyCardClick(card)
    }
    return (
        <div className={styles.card}>
            <img 
                src={card.image}
                onClick={onClick}
            />   
        </div>
    )
}

export default Card;

