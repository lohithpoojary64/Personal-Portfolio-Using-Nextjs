"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

const Header = () => {
  return (
    <main className="h-[400px] w-[100%] flex justify-center items-center">
      <h1 className="font-sans text-6xl font-extrabold text-white">
        <motion.span
          initial={{ backgroundPosition: "0%", backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: "100%"}}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className=" bg-gradient-to-r from-red to-orange via-red via-purple"
        >
          Creativity
        </motion.span>
        begins with an idea
      </h1>
    </main>
  );
};

export default Header;
