import React from "react";

function GuessInput({ handleGuessSubmit, disabled }) { 
  const [guess, setGuess] = React.useState("");

  return <form 
  onSubmit={event => {
    event.preventDefault();
    handleGuessSubmit(guess);
    setGuess("");
  }}
  className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input"
      type="text"
      value={guess}
      onChange={event => setGuess(event.target.value.toUpperCase())}
      pattern="[A-Z]{5}"
      disabled={disabled}
    />
  </form>;
}

export default GuessInput;
