class Card {
    constructor(num, side, image) {
        this.num = num;
        this.side = side;
        this.image = image;
    }
}

class Scoreboard {
    constructor(owner) {
        this.owner = owner
        this.win = 0
        this.draw = 0
        this.lose = 0
    }
}

class Pair {
    constructor(rank, special) {
        this.rank = rank
        this.special = special
    }
}

class Game {
    constructor() {
        this.winner = [];
        this.rank = Infinity;
        this.gusa = false;
        this.mungGusa = false;
        this.fourSeven = false;
        this.threeSeven = false;
    }
}

const card1a = new Card(1, "a", '/card-images/1a.png')
const card1b = new Card(1, "b", '/card-images/1b.png')
const card2a = new Card(2, "a", '/card-images/2a.png')
const card2b = new Card(2, "b", '/card-images/2b.png')
const card3a = new Card(3, "a", '/card-images/3a.png')
const card3b = new Card(3, "b", '/card-images/3b.png')
const card4a = new Card(4, "a", '/card-images/4a.png')
const card4b = new Card(4, "b", '/card-images/4b.png')
const card5a = new Card(5, "a", '/card-images/5a.png')
const card5b = new Card(5, "b", '/card-images/5b.png')
const card6a = new Card(6, "a", '/card-images/6a.png')
const card6b = new Card(6, "b", '/card-images/6b.png')
const card7a = new Card(7, "a", '/card-images/7a.png')
const card7b = new Card(7, "b", '/card-images/7b.png')
const card8a = new Card(8, "a", '/card-images/8a.png')
const card8b = new Card(8, "b", '/card-images/8b.png')
const card9a = new Card(9, "a", '/card-images/9a.png')
const card9b = new Card(9, "b", '/card-images/9b.png')
const card10a = new Card(10, "a", '/card-images/10a.png')
const card10b = new Card(10, "b", '/card-images/10b.png')

// deck을 섞어서 return하는 함수
function shuffle(deck) { 
    var j, x, i; 
    for (i = deck.length; i; i -= 1) { 
        j = Math.floor(Math.random() * i); 
        x = deck[i - 1]; 
        deck[i - 1] = deck[j]; 
        deck[j] = x; 
    }
    return deck 
}

// function pickTwoCards(shuffledDeck, numberOfPlayers) {
//     let cardsOfEachPlayers = new Array();
//     for (let i = 0; i < numberOfPlayers; i++) {        
//         const card1 = shuffledDeck.pop();
//         const card2 = shuffledDeck.pop();
    
//         cardsOfEachPlayers.push([card1, card2]);
//     }
//     return cardsOfEachPlayers;
// }

function pickTwoCardsWithSelectedCard(shuffledDeck, numberOfPlayers, selectedCard) {
    let cardsOfEachPlayers = [];
    const secondCardOfP1 = shuffledDeck.pop();

    cardsOfEachPlayers.push([selectedCard, secondCardOfP1])

    for (let i = 0; i < numberOfPlayers - 1; i++) {        
        const card1 = shuffledDeck.pop();
        const card2 = shuffledDeck.pop();
    
        cardsOfEachPlayers.push([card1, card2]);
    }
    return cardsOfEachPlayers;
}


// 카드 2장을 받은 뒤 Pair 객체를 return하는 함수
function decidePair(card1, card2) {
    if ((card1.num == 3 && card2.num == 8) || (card1.num == 8 && card2.num == 3)) { 
        if (card1.side == "a" && card2.side == "a") { // 처음에 내부에 if문을 이거 하나만 써서 3, 8인데 광땡이 아닌 것들이 전부 undefined처리됨.
            return new Pair(0, null);
        } else {
            return new Pair(26, null);
        }
    } else if ((card1.num == 1 && card2.num == 3) || (card1.num == 3 && card2.num == 1)){
        if ((card1.side == "a") && (card2.side == "a")) {
            return new Pair(1, null);
        } else {
            return new Pair(23, null)
        }
    } else if ((card1.num == 1 && card2.num == 8) || (card1.num == 8 && card2.num == 1)) {
        if ((card1.side == "a") && (card2.side == "a")) {
            return new Pair(1, null);
        } else {
            return new Pair(18, null)
        }
    } else if (card1.num == card2.num) {
        if (card1.num == 10) {
            return new Pair(2, null);
        } else if (card1.num == 9) {
            return new Pair (3, null);
        } else if (card1.num == 8) {
            return new Pair (4, null);
        } else if (card1.num == 7) {
            return new Pair (5, null);
        } else if (card1.num == 6) {
            return new Pair (6, null);
        } else if (card1.num == 5) {
            return new Pair (7, null);
        } else if (card1.num == 4) {
            return new Pair (8, null);
        } else if (card1.num == 3) {
            return new Pair (9, null);
        } else if (card1.num == 2) {
            return new Pair (10, null);
        } else if (card1.num == 1) {
            return new Pair (11, null);
        }
    } else if ((card1.num == 1 && card2.num == 2) || (card1.num == 2 && card2.num == 1)) {
        return new Pair(12, null);
    } else if ((card1.num == 1 && card2.num == 4) || (card1.num == 4 && card2.num == 1)) {
        return new Pair(13, null);
    } else if ((card1.num == 1 && card2.num == 9) || (card1.num == 9 && card2.num == 1)) {
        return new Pair(14, null);
    } else if ((card1.num == 1 && card2.num == 10) || (card1.num == 10 && card2.num == 1)) {
        return new Pair(15, null);
    } else if ((card1.num == 4 && card2.num == 10) || (card1.num == 10 && card2.num == 4)) {
        return new Pair(16, null);
    } else if ((card1.num == 4 && card2.num == 6) || (card1.num == 6 && card2.num == 4)) {
        return new Pair(17, null);
    } else if ((card1.num == 4 && card2.num == 9) || (card1.num == 9 && card2.num == 4)) {
        if (card1.side == "a" && card2.side == "a") {
            return new Pair(24, "mungGusa");
        } else {
            return new Pair(24, "gusa");
        } 
    } else if ((card1.num == 4 && card2.num == 7) || (card1.num == 7 && card2.num == 4)) {
        if (card1.side == "a" && card2.side == "a") {
            return new Pair(26, "fourSeven");
        } else {
            return new Pair(26, null)
        }
    } else if ((card1.num == 3 && card2.num == 7) || (card1.num == 7 && card2.num == 3)) {
        if (card1.side == "a" && card2.side == "a") {
            return new Pair(27, "threeSeven");
        } else {
            return new Pair(27, null)
        }
    } else {
        if ((card1.num + card2.num) % 10 == 9)  {
            return new Pair(18, null);
        } else if ((card1.num + card2.num) % 10 == 8) {
            return new Pair(19, null); 
        } else if ((card1.num + card2.num) % 10 == 7) {
            return new Pair(20, null);
        } else if ((card1.num + card2.num) % 10 == 6) {
            return new Pair(21, null);
        } else if ((card1.num + card2.num) % 10 == 5) {
            return new Pair(22, null);
        } else if ((card1.num + card2.num) % 10 == 4) {
            return new Pair(23, null);
        } else if ((card1.num + card2.num) % 10 == 3) {
            return new Pair(24, null);
        } else if ((card1.num + card2.num) % 10 == 2) {
            return new Pair(25, null);
        } else if ((card1.num + card2.num) % 10 == 1) {
            return new Pair(26, null);
        } else if ((card1.num + card2.num) % 10 == 0) {
            return new Pair(27, null);
        }
    }
}

function makeCardsToPairs(cardsOfEachPlayers) {
    let pairsOfEachPlayers = new Array();
    for (let i = 0; i < cardsOfEachPlayers.length; i++) {
        const card1 = cardsOfEachPlayers[i][0]
        const card2 = cardsOfEachPlayers[i][1]
        const pair = decidePair(card1, card2)

        pairsOfEachPlayers.push(pair)
    }
    return pairsOfEachPlayers
}

// 게임을 업데이트하는데 필요함 함수
function reflectPairToGame(pair, game) {
    if (pair.special) {
        if (pair.special == "mungGusa") {
            game.mungGusa = true;
        } else if (pair.special == "gusa") {
            game.gusa = true;
        } else if (pair.special == "fourSeven") {
            game.fourSeven = true;
        } else if (pair.special == "threeSeven") {
            game.fourSeven = true;
        }
    }
    if (pair.rank < game.rank) {
        game.rank = pair.rank;
        return "newWinner"
    } else if (pair.rank == game.rank) {
        return "sameRank"
    } else {
        return false
    }
}

// 페어들을 받아서 게임 객체로 return
function updateGame(pairsOfEachPlayers) {
    let game = new Game(); // game 객체를 만들고 
    for (let i = 0; i < pairsOfEachPlayers.length; i++) {
        const result = reflectPairToGame(pairsOfEachPlayers[i], game)
        if (result == "newWinner") {
            game.winner = []
            game.winner.push(i)
        } else if (result == "sameRank") {
            game.winner.push(i)
        } 
    }
    return game
}


// 특수족보를 들고있는 사람을 찾는다
function findSpecialHolder(special, pairsOfEachPlayers) {
    for (let i = 0; i < pairsOfEachPlayers.length; i++) {
        if (pairsOfEachPlayers[i].special == special) {
            return i
        }
    }
}

// 마지막으로 특수족보를 따진다.
    // game 상태와 pair를 받아서 [winner]를 return한다.
function decideGameWinner(game, pairsOfEachPlayers) {
    if (game.mungGusa) {
        if (game.rank > 3) {
            return []; // 무승부는 승자가 없어서 []
        }
    }
    if (game.gusa) {
        if (game.rank > 11) {
            return [];
        }
    }
    if (game.fourSeven) { // 47땡잡이는 1땡 ~ 9땡에게 승리
        if ((game.rank >= 3) && (game.rank <= 11)) {
            const specialWinner = findSpecialHolder("fourSeven", pairsOfEachPlayers);
            game.winner = [specialWinner]
            return game.winner;
        }
    }
    if (game.threeSeven) { //37암행어사는 18광땡 혹은 13광땡에 승리
        if (game.rank == 1) {
            const specialWinner = findSpecialHolder("threeSeven", pairsOfEachPlayers);
            game.winner = [specialWinner]
            return game.winner;
        }
    }
    return game.winner
}

// 플레이어의 승무패를 스코어보드에 기록해준다.
function writeInScoreboard(scoreboard, winner) {
    if (winner.length < 1) {
        scoreboard.draw += 1
        return
    } else if (winner.includes(scoreboard.owner)) {
        scoreboard.win += 1
        return
    } else {
        scoreboard.lose += 1
        return
    }
}

function simulation(selectedCard, numberOfPlayers) {
    const numOfSimulation = 1000
    let numOfTrial = 0
    let playScoreboard = new Scoreboard(0)

    while (numOfTrial != numOfSimulation) {
        let deck = [card1a, card1b, card2a, card2b, card3a, card3b, card4a, card4b, card5a, card5b, card6a, card6b, card7a, card7b, card8a, card8b, card9a, card9b, card10a, card10b]
        // const selectedCardIdx = deck.indexOf(selectedCard)
        // deck.splice(selectedCardIdx, 1)
           
        // let simulationDeck = [...deck]
        let shuffledDeck = shuffle(deck);
        const cardsOfEachPlayers = pickTwoCardsWithSelectedCard(shuffledDeck, numberOfPlayers, selectedCard);
        const pairsOfEachPlayers =  makeCardsToPairs(cardsOfEachPlayers);
        const game = updateGame(pairsOfEachPlayers);
        const gameWinner = decideGameWinner(game, pairsOfEachPlayers);
        writeInScoreboard(playScoreboard, gameWinner);    
        
        numOfTrial += 1
    }
    
    return playScoreboard
}

function getSimulationResult(selectedCard, numberOfPlayers) {
    if (selectedCard && numberOfPlayers) {
        const result = simulation(selectedCard, numberOfPlayers);
        const numberOfWins = result.win
        const numberOfDraws = result.draw
        const numberOfLoses = result.lose
        const winRate = (numberOfWins / 1000) * 100

        return {
            numberOfWins: numberOfWins,
            numberOfDraws: numberOfDraws,
            numberOfLoses: numberOfLoses,
            winRate: winRate
        }
    }
}

export default getSimulationResult