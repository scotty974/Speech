import { useRef } from "react";
function GameLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawGrid = () => {
    const canvas: any = canvasRef.current;
    if (!canvas.current) return;
    const ctx = canvas.getContext("2d");
    
  };
  return (
    <canvas ref={canvasRef} className="min-h-screen w-full bg-black"></canvas>
  );
}

export default GameLife;
