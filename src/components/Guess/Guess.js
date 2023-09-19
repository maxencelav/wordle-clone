import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  let slotStatuses = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={slotStatuses ? slotStatuses[num].letter : undefined}
          status={slotStatuses ? slotStatuses[num].status : undefined} 
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export default Guess;