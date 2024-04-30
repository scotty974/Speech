import { useRef } from "react";
function GameLife() {
  const canvas = useRef<HTMLCanvasElement>(null);

  return <canvas ref={canvas} className="min-h-screen w-full bg-black"></canvas>;
}

export default GameLife;
