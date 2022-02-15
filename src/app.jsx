import styles from './app.module.css';
import Console from './components/console/console';
import Header from './components/header/header';
import Board from './components/board/board';
import Result from './components/result/result';
import deck from './service/deck.js'
import getSimulationResult from './service/simulator'
import { useEffect, useState } from 'react';

function App({ peopleOption }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [numberOfPlayers, setNumberOfPlayers] = useState(null);
  const [result, setResult] = useState(null);

  const onMyCardClick = (card) => {
    console.log(card)
    setSelectedCard(card)
  }

  const onPlayerNumberButtonClick = (number) => {
    console.log(number)
    setNumberOfPlayers(number)
  }

  const showSimulation = () => {
      if (selectedCard && numberOfPlayers) {
        const result = getSimulationResult(selectedCard, numberOfPlayers)
        setResult(result)
      }
  }

  useEffect(() => {
    showSimulation()
  }, [selectedCard, numberOfPlayers])

  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <div className={styles.board}>
          <Board
            onMyCardClick={onMyCardClick}
            deck={deck} 
          />
        </div>
        <div className={styles.result}>
          <Result
             result={result}
          />
        </div>
      </div>
      <div className={styles.console}>
        <Console
          peopleOption={peopleOption}
          onPlayerNumberButtonClick={onPlayerNumberButtonClick} 
        />   
      </div>
    </>
  );
}

export default App;
