'use client';
import { useEffect } from 'react';
import fluidCursor from "./Fluid";
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div className="fixed top-0 left-0 z-[100] h-full w-full pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};
export default FluidCursor;
