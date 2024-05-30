import React from 'react'
import styled from "styled-components";
import {Card, Span} from "@/app/components";
// Use this function to get a randomized set of cards
// console.log(getRandomizedCards(8));
// If you do not want to randomize the letters, pass false as a second parameter
// console.log(getRandomizedCards(8, false));
const getRandomizedCards = (numPairsOfCards) => {
    if (numPairsOfCards < 1 || numPairsOfCards > 26) {
        throw new Error("numPairsOfCards must be between 1 and 26.");
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const selectedLetters = alphabet.slice(0, numPairsOfCards).split('');
    const letterPairs = [...selectedLetters, ...selectedLetters];

    // Shuffle the array
    for (let i = letterPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letterPairs[i], letterPairs[j]] = [letterPairs[j], letterPairs[i]];
    }

    return letterPairs;
}

export const MemoryMatch = ({pairsOfCards}) => {
    const [gameState, setGameState] = React.useState({});
    const [last2CardsClicked, setLast2CardsClicked] = React.useState([])

    const numRowsAndCols = Math.ceil(pairsOfCards / 2)

    React.useEffect(() => {
        let cards = getRandomizedCards(pairsOfCards, false);
        let initialGameState = cards.reduce((game, card, index) => {
            game[index] = {showing: false, card}
            return game;
        }, {})
        setGameState(initialGameState)
    }, [pairsOfCards])

    React.useEffect(() => {
        /*
        let isMatchingShowing = getIsMatchingCardShowing(lastCardClicked, gameState)
        if(isMatchingShowing){
            console.log("yay you found a match!")
            return;
        }

        setTimeout(() => {
            console.log("matching not showing, flipping back over")
            handleFlipCard(lastCardClicked?.cardNum, lastCardClicked?.card, false)
        }, 1000)
        */
    }, [last2CardsClicked])

    const getIsMatchingCardShowing = (card, gameState) => {
        let count = 0;
        for (let gameCard of Object.values(gameState)) {
            if (gameCard === card) {
                count++;
            }
        }

        console.log("getIsMatchingCardShowing", count)
        return count === 2;
    }

    const handleFlipCard = (cardNum, card, showing) => {
        setGameState((prevState) => {
            let updatedGameState = {...prevState};
            updatedGameState[cardNum] = {...updatedGameState[cardNum], showing}
            return updatedGameState;
        })
    }

    const handleCardClick = (cardNum, card) => {
        console.log(`clicked: ${cardNum} card: ${card}`)
        handleFlipCard(cardNum, card, true)
        setLast2CardsClicked({cardNum, card})
    }

    console.table(gameState);

    return (
        <div id="game"
             style={{
                 display: 'grid',
                 gridGap: '12px',
                 gridTemplateRows: `repeat(${numRowsAndCols}, 1fr)`,
                 gridTemplateColumns: `repeat(${numRowsAndCols}, 1fr)`,
             }}
        >
            {Object.entries(gameState).map(([cardNum, {showing, card}], index) => {

                return (
                    <GameCard
                        handleCardClick={() => {
                            handleCardClick(cardNum, card)
                        }}
                        key={`${card}-${index}`}
                        card={card}
                        cardNumber={index}
                        showing={showing}/>
                )
            })}
        </div>
    )
}

const FlippableCard = styled(Card)`
    overflow: hidden;
    cursor: pointer;
    min-height: 100px;
    ${({showing}) => showing ? `
            background-color: #404040;
            color: white;
        ` : `
            background-color: lightgrey;
        `}
}
`

const GameCard = ({
                      handleCardClick,
                      card,
                      cardNumber,
                      showing,
                  }) => {

    return (
        <FlippableCard showing={showing} onClick={handleCardClick}>
            showing: {JSON.stringify(showing)}
            {showing ? <Span color={showing ? 'white' : 'black'}>{card}</Span> : null}
        </FlippableCard>
    );
}
