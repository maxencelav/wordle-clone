import React from 'react';

import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessSlots from '../GuessSlots/GuessSlots';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => ""));
  

  function handleGuess(guess) {
    // Replace the first empty guess with the new guess
    const newGuesses = guesses.map((oldGuess, index) => {
      if (oldGuess === "" && index === guesses.indexOf("")) {
        // If the guess is "" and it's the first one, return the new guess
        return guess;
      } else {
        // Otherwise, return the old guess
        return oldGuess;
      }
    });
    setGuesses(newGuesses);
  }

  return <>
    <GuessSlots guessesArray={guesses} answer={answer}/>
    <GuessInput handleGuessSubmit={handleGuess}/>
  </>;
}

export default Game;
