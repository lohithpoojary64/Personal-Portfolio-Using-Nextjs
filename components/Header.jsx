"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import Profile from "./Profile";

const Header = () => {
  // Generating stars for the header and navbar
  const generateDots = (count) => {
    let dots = [];
    for (let i = 0; i < count; i++) {
      let size = Math.random() * 7; // Random size between 3px and 10px
      let yaxis = Math.random() * 100; // Random position between 0% and 100%
      let xaxis = Math.random() * 100; // Random position between 0% and 100%
      let delay = Math.random() * 5; // Random delay for blinking

      dots.push(
        <motion.div
          key={i}
          className="bg-white rounded-full absolute"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${yaxis}%`,
            left: `${xaxis}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay,
          }}
        />
      );
    }
    return dots;
  };

  return (
    <main className="relative h-[400px] w-full flex flex-col justify-center items-center overflow-hidden">
      {generateDots(50)}
      <Profile/>
      <motion.h1
        className="font-sans text-6xl font-bold text-white relative mt-4"
        style={{
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 0, 0, 0.6)",
        }}
        initial={{ fontSize: "10px", opacity: 0 }}
        animate={{ fontSize: "40px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <motion.span
          initial={{ backgroundPosition: "0%", backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="mr-2 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          Hi, Iam Lohith Poojary
        </motion.span>
      </motion.h1>
      <div className="h-[40px] w-[100%] mt-6 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ backgroundSize: "0% 100%", opacity: 0 }}
          animate={{ backgroundSize: "200% 100%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          style={{
            backgroundImage: "linear-gradient(to right, white, gray)",
            backgroundClip: "text",
            color: "transparent", // Make the text itself transparent to reveal the gradient
          }}
        >
          A passionate Front End Developer
        </motion.h1>
        <motion.h1
          initial={{ backgroundSize: "0% 100%", opacity: 0 }}
          animate={{ backgroundSize: "200% 100%", opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          style={{
            backgroundImage: "linear-gradient(to right, white, gray)",
            backgroundClip: "text",
            color: "transparent", // Make the text itself transparent to reveal the gradient
          }}
        >
          with hands-on experience in creating production-ready applications.
        </motion.h1>
      </div>
    </main>
  );
};

export default Header;
