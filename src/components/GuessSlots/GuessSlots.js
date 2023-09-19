import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessSlots({ guessesArray, answer }) {

  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((_empty, guessIndex) => {
      return <Guess key={guessIndex} value={guessesArray[guessIndex]} answer={answer} />;
    })}
  </div>;
}

export default GuessSlots;
