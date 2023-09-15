import React from "react";

function GuessInput() { 
  const [guess, setGuess] = React.useState("");

  return <form 
  onSubmit={event => {
    event.preventDefault();
    console.log({guess:guess});
    setGuess("");
  }}
  className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input"
      type="text"
      value={guess}
      onChange={event => setGuess(event.target.value.toUpperCase())}
      pattern="[A-Z]{1,5}"
    />
  </form>;
}

export default GuessInput;
