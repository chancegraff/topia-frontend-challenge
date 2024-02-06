import { useEffect, useState } from "react";

export const useScreenDimensions = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  function setScreenDimensions() {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }

  useEffect(() => {
    setScreenDimensions();
    window.addEventListener("resize", setScreenDimensions);
    return () => {
      window.removeEventListener("resize", setScreenDimensions)
    }
}, []);

  return [screenWidth, screenHeight];
};
