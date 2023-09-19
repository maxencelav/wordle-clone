import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessSlots from '../GuessSlots/GuessSlots';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    console.log({guess:guess});
    setGuesses(guesses => [...guesses, guess]);
  }

  return <>
    <GuessSlots guesses={guesses} />
    <GuessInput handleGuessSubmit={handleGuess}/>
  </>;
}

export default Game;
