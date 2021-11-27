import React, { useState } from "react";

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
  console.log(board);

  let handleSquareClick = (position) => {
    setBoard((prev) => {
      console.log(prev);
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X":'O';
        }
        return square;
      });
    });

    setIsXNext((prev) => {
      console.log(prev)
      return !prev
    });
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Boards board={board} handleSquareClick={handleSquareClick} />
    </>
  );
};
