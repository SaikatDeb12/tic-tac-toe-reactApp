import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, changeTurn] = useState(true);

  const squareClicked = (ind) => {
    // console.log(ind);
    const tempState = [...state];
    if (turn) {
      tempState[ind] = "X";
    } else {
      tempState[ind] = "O";
    }
    changeTurn(!turn);
    setState(tempState);
  };

  return (
    <div className="board-container">
      <div className="board-rows">
        <Square onClick={() => squareClicked(0)} value={state[0]} />
        <Square onClick={() => squareClicked(1)} value={state[1]} />
        <Square onClick={() => squareClicked(2)} value={state[2]} />
      </div>
      <div className="board-rows">
        <Square onClick={() => squareClicked(3)} value={state[3]} />
        <Square onClick={() => squareClicked(4)} value={state[4]} />
        <Square onClick={() => squareClicked(5)} value={state[5]} />
      </div>
      <div className="board-rows">
        <Square onClick={() => squareClicked(6)} value={state[6]} />
        <Square onClick={() => squareClicked(7)} value={state[7]} />
        <Square onClick={() => squareClicked(8)} value={state[8]} />
      </div>
    </div>
  );
};

export default Board;
