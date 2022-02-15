import React from 'react';
import styles from './result.module.css'

const Result = ({ result }) => {
    return (
        <div className={styles.result}>
            { result &&
            `
                결과 \n
                승리: ${result.numberOfWins}회 \n
                무승부(사구파토포함): ${result.numberOfDraws}회 \n
                패배: ${result.numberOfLoses}회 \n
                승률:${result.winRate.toFixed(2)}
            `
            }
        </div>
    )
}

export default Result;