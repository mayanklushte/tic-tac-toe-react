import React, { useState } from "react";
import calculateWinners from './helpers'

import Boards from "./components/Boards";
import "./index.scss";

export default () => {
  let [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);




  let [isXNext, setIsXNext] = useState(true)

  let result = calculateWinners(board);

  let head_2 = result ? `Winner is ${result}` : `Next Player is: ${isXNext ? 'X': 'O'}`


  let handleSquareClick = (position) => {
    if (result) {
      return;
    }
    setBoard((prev) => {
      
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X":'O';
        }
        return square;
      });
    });

    setIsXNext((prev) => {
      
      return !prev
    });
  };

  

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>{head_2}</h2>
      <Boards board={board} handleSquareClick={handleSquareClick} />
    </>
  );
};
