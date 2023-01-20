import React from "react";
import useWindowDimensions from "./useWindowDimensions";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  const windowDimensions = useWindowDimensions();

  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      if (windowDimensions !== undefined) {
        // setMousePosition({
        //   x: (ev.clientX / windowDimensions.width) * 100,
        //   y: (ev.clientY / windowDimensions.height) * 100,
        // });
        setMousePosition({
          x: ev.clientX,
          y: ev.clientY,
        });
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
export default useMousePosition;
