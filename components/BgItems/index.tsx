import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { IMousePosition } from "./types";

export default function BgItems(props: IMousePosition) {
  return (
    <AnimatePresence>
      {!props.bgTransition && (
        <motion.div exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-yellow-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x + 50,
              y: props.y - 50,
            }}
            transition={{
              type: "spring",
              damping: 250,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[35vw] h-[35vw] bg-radial from-red-foderj via-transparent via-transparent to-transparent absolute"
            animate={{
              x: props.x + 200,
              y: props.y + 400,
            }}
            transition={{
              type: "spring",
              damping: 250,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[15vw] h-[15vw] bg-radial from-red-foderj via-transparent via-transparent via-transparent to-transparent absolute"
            animate={{
              x: props.x + 600,
              y: props.y + 200,
            }}
            transition={{
              type: "spring",
              damping: 150,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-red-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x + 600,
              y: props.y + 200,
            }}
            transition={{
              type: "spring",
              damping: 150,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-yellow-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x - 600,
              y: props.y - 200,
            }}
            transition={{
              type: "spring",
              damping: 100,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-yellow-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x - 400,
              y: props.y - 400,
            }}
            transition={{
              type: "spring",
              damping: 160,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-yellow-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x - 800,
              y: props.y - 800,
            }}
            transition={{
              type: "spring",
              damping: 140,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-red-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x - 900,
              y: props.y - 100,
            }}
            transition={{
              type: "spring",
              damping: 120,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
          <motion.div
            className="opacity-80 w-[45vw] h-[45vw] bg-radial from-red-foderj via-transparent to-transparent absolute"
            animate={{
              x: props.x + 500,
              y: props.y - 500,
            }}
            transition={{
              type: "spring",
              damping: 120,
              stiffness: 50,
              restDelta: 0.001,
              mass: 0.5,
              velocity: 5,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
