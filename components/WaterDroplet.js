import { motion } from "framer-motion";

import React from "react";

export const WaterDroplet = () => {
  return (
    <motion.div
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: "white",
        borderRadius: "50%",
        position: "relative",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      animate={{
        y: ["0%"],
        opacity: [1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};
