import { useEffect, useRef, useState } from "react";
import GameBorad from "./gameBoard";
import Nav from "../Nav";

const generateBoard = ({ xGrid, yGrid }) => {
  const board = Array.from({ length: xGrid }, () =>
    Array.from({ length: yGrid }, () => Math.random() > 0.5)
  );
  return board;
};

const getNextBoard = ({ board }) => {
  const newBoard = [...board.map((row) => [...row])];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      const neighbors = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      const aliveNeighbors = neighbors.filter(
        ([x, y]) =>
          x >= 0 &&
          x < board.length &&
          y >= 0 &&
          y < board[i].length &&
          board[x][y]
      ).length;
      if (cell && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        newBoard[i][j] = false;
      } else if (!cell && aliveNeighbors === 3) {
        newBoard[i][j] = true;
      }
    }
  }
  return newBoard;
};
function GameLife() {
  const [xGrid] = useState(10);
  const [yGrid] = useState(10);
  const [board, setBoard] = useState<boolean[][]>(
    generateBoard({ xGrid, yGrid })
  );
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setBoard(board =>getNextBoard({ board }));
      }, 2000);
    }else{
        clearInterval(intervalRef.current)
    }
  }, [running]);

  return (
    <>
      <Nav isPlaying={running} onGameChange={setRunning} />
      <GameBorad
        xGrid={xGrid}
        yGrid={yGrid}
        board={board}
        onChangeBoard={setBoard}
      />
    </>
  );
}

export default GameLife;
