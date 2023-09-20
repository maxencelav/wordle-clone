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

  // store the state of the game (playing, won, lost)
  const [gameState, setGameState] = React.useState("playing");

  // on every guess, check if the game is won or lost
  React.useEffect(() => {
    // if the guesses array contains the answer, the game is won
    if (guesses.includes(answer)) {
      setGameState("won");
    }
    // if the guesses array is full and doesn't contain the answer, the game is lost
    if (!guesses.includes("") && !guesses.includes(answer)) {
      setGameState("lost");
    }
  }, [guesses]);


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
    <GuessSlots guessesArray={guesses} answer={answer} />
    <GuessInput handleGuessSubmit={handleGuess} disabled={gameState !== "playing"}/>

    {gameState === "won" && <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{guesses.filter(guess => guess !== "").length}</strong> guesses.
      </p>
    </div>}

    {gameState === "lost" && <div class="sad banner">
      <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>
    </div>}
  </>;
}

export default Game;
