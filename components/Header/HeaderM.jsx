"use client";
import React from "react";
import Profile from "../Profile";
import { motion } from "framer-motion";

const HeaderM = () => {
  return (
    <div className="lg:hidden md:hidden h-[300px] w-full flex flex-col gap-4 items-center">
      <div>
        <Profile />
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-sans text-6xl font-bold text-white relative mt-4"
          style={{
            textShadow:
              "0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 0, 0, 0.6)",
          }}
          initial={{ fontSize: "13px", opacity: 0 }}
          animate={{ fontSize: "20px", opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <motion.span
            initial={{
              backgroundPosition: "0%",
              backgroundSize: "200% 100%",
            }}
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
            fontSize:"12px",
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
            fontSize:"10px",
          }}
        >
          with hands-on experience in creating production-ready applications.
        </motion.h1>
      </div>
      </div>
    </div>
  );
};

export default HeaderM;
