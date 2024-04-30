import { useEffect, useState } from "react";
import GameBorad from "./gameBoard";
import Nav from "../Nav";

const generateBoard = ({ xGrid, yGrid }) => {
  const board = Array.from({ length: xGrid }, () =>
    Array.from({ length: yGrid }, () => Math.random() > 0.5)
  );
  return board;
};
function GameLife() {
  const [xGrid, setXGrid] = useState(10);
  const [yGrid, setYGrid] = useState(10);
  const [board, setBoard] = useState<boolean[][]>(
    generateBoard({ xGrid, yGrid })
  );

  return (
    <>
    <Nav />
    <GameBorad xGrid={xGrid} yGrid={yGrid} board={board} onChangeBoard={setBoard} />
    </>
)
}

export default GameLife;
