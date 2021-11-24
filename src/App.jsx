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

  let handleSquareClick = (position) => {
    board[position] = "x";

    let new_board = board;

    setBoard(new_board);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Boards board={board} handleSquareClick={handleSquareClick} />
    </>
  );
};
