import React, { useReducer, useRef, useState } from "react";
import Image from "next/image";
import ClickInitial from "../public/assets/svg/initial-click.svg";
import LogoInitial from "../public/assets/svg/logo-initial.svg";
import QuoteInitial from "../public/assets/svg/quote-initial.svg";
import { motion, AnimatePresence } from "framer-motion";
import getRelativeCoordinates from "../utils/getRelativeCoordinates";
import BgItems from "../components/BgItems";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  const boxRef = useRef();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    centerX: 0,
    centerY: 0,
  });
  const [state, setState] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    { showInitialLogo: true, bgTransition: false }
  );
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  const variants = {
    inProgress: {
      backgroundColor: "#010101",
      transition: {
        duration: 1,
      },
    },
    normal: {
      backgroundColor: "#22274C",
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      ref={boxRef}
      className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-blue-foderj overflow-hidden relative"
      onMouseMove={(e) => handleMouseMove(e)}
      variants={variants}
      animate={state.bgTransition ? "inProgress" : "normal"}
    >
      <BgItems
        bgTransition={state.bgTransition}
        x={mousePosition.x}
        y={mousePosition.y}
      />
      <AnimatePresence>
        {state.showInitialLogo && (
          <motion.div
            className="z-10"
            key="initial-logo"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            onClick={() => {
              setState({ showInitialLogo: false, bgTransition: true });
              setTimeout(() => {
                setState({ bgTransition: false });
              }, 2000);
            }}
          >
            <Image src={ClickInitial} alt="foderj initial logo"></Image>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!state.showInitialLogo && (
          <motion.div
            className="w-1/2 self-center"
            initial={{ opacity: 0, display: "none", y: -100 }}
            animate={{ opacity: 1, display: "block", y: 0 }}
            transition={{
              delay: 1,
              duration: 0.3,
            }}
          >
            <Image src={LogoInitial} alt="foderj logo"></Image>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!state.showInitialLogo && (
          <motion.div
            className="w-1/2 self-center absolute bottom-10"
            initial={{ opacity: 0, display: "none", y: 100 }}
            animate={{ opacity: 1, display: "block", y: 0 }}
            transition={{
              delay: 1,
              duration: 0.3,
            }}
          >
            <Image
              className="m-auto"
              src={QuoteInitial}
              alt="foderj logo"
            ></Image>
          </motion.div>
        )}
      </AnimatePresence>
      <SocialIcons showInitialLogo={state.showInitialLogo} />
    </motion.div>
  );
}
