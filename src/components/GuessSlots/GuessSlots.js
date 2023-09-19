import React from "react";

function GuessSlots(guesses) {

  return <div className="guess-results">
    {guesses.guesses.map((guess, index) => {
      return <p className="guess" key={index}>{guess}</p>
    })}
  </div>;
}

export default GuessSlots;
