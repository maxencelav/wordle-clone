import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessSlots({ guessesArray }) {

  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((guess, guessIndex) => {
      return <Guess key={guessIndex} value={guessesArray[guessIndex]} />;
    })}
  </div>;
}

export default GuessSlots;
