import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import React from "react";
import { ISocialIcons } from "./types";

export default function SocialIcons(props: ISocialIcons) {
  return (
    <AnimatePresence>
      {!props.showInitialLogo && (
        <motion.ul className="flex flex-col gap-3 absolute left-1">
          <motion.li
            key="fb"
            className="opacity-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              x: 25,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.1,
                duration: 0.2,
                damping: 7,
              },
            }}
          >
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="w-[2vw] h-[2vw] cursor-pointer "></FaFacebookF>
            </a>
          </motion.li>
          <motion.li
            key="ig"
            className="opacity-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              x: 25,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 0.2,
                damping: 7,
              },
            }}
          >
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaInstagram className="w-[2vw] h-[2vw] cursor-pointer "></FaInstagram>
            </a>
          </motion.li>
          <motion.li
            key="ig"
            className="opacity-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              x: 25,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.3,
                duration: 0.2,
                damping: 7,
              },
            }}
          >
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaWhatsapp className="w-[2vw] h-[2vw] cursor-pointer "></FaWhatsapp>
            </a>
          </motion.li>
          <motion.li
            key="ig"
            className="opacity-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              x: 25,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.4,
                duration: 0.2,
                damping: 7,
              },
            }}
          >
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaYoutube className="w-[2vw] h-[2vw] cursor-pointer "></FaYoutube>
            </a>
          </motion.li>
          <motion.li
            key="ig"
            className="opacity-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            animate={{
              x: 25,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.5,
                duration: 0.2,
                damping: 7,
              },
            }}
          >
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="w-[2vw] h-[2vw] cursor-pointer "></FaLinkedinIn>
            </a>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
