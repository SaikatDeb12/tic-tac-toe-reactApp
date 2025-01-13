import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, changeTurn] = useState(true);
  const [gameStatus, changeStatus] = useState(false);

  const squareClicked = (ind) => {
    console.log(ind);
    const tempState = [...state];
    if (tempState[ind] != null) return;
    if (turn) {
      tempState[ind] = "X";
    } else {
      tempState[ind] = "O";
    }

    changeTurn(!turn);
    setState(tempState);
    // checkWinner(tempState) ? changeStatus(!gameStatus) : false;
    if (checkWinner(tempState)) changeStatus(!gameStatus);
  };

  const checkWinner = (currentState) => {
    const winningPos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 8],
      [2, 5, 9],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningPos) {
      if (
        currentState[a] !== null &&
        currentState[a] == currentState[b] &&
        currentState[b] == currentState[c]
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="board-container">
      {gameStatus ? (
        <>
          <div className="result-screen">
            <h1>Someone won</h1>
            <button>Play Again!!</button>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Board;
