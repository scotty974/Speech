function GameBoard({
  xGrid,
  yGrid,
  board,
  onChangeBoard,
}: {
  xGrid: number;
  yGrid: number;
  board: boolean[][];
  onChangeBoard: (newBoard: boolean[][]) => void;
}) {
  const handleClick = (i: number, j: number) => {
    const newBoard = [...board];
    newBoard[i][j] = !newBoard[i][j];

    onChangeBoard(newBoard);
    
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      {Array.from({ length: xGrid }, (_, i) => (
        <div key={i} className="flex-1 flex">
          {Array.from({ length: yGrid }, (_, j) => (
            <div
              onClick={() => handleClick(i, j)}
              key={j}
              className="h-full flex-1 border"
              style={{ backgroundColor: board[i][j] ? "black" : "white" }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
