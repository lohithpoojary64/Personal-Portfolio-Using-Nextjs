"use client";
import React from "react";
import Image from "next/image";
import react from "../public/react.png";
import node from "../public/node.png";
import next from "../public/next.svg";
import tailwind from "../public/tailwind.svg";
import ant from "../public/antd.svg";
import framer from "../public/framer.svg";
import typescript from "../public/typescript.svg";
import { motion } from "framer-motion";
import { Flex, Progress } from "antd";

const Skills = () => {
  return (
    <div className="w-full h-200px p-20 flex justify-center">
      <motion.div
        className="flex justify-start  gap-[20px]  w-[56%] h-full rounded-3xl p-2 border border-solid border-white text-white"
        style={{
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 0, 0, 0.6)",
        }}
        initial={{ fontSize: "50px", opacity: 0 }}
        animate={{ fontSize: "70px", opacity: 1 }}
        transition={{ duration: 1, ease: "easeIn", delay: 2 }}
      >
        <div className="relative flex justify-center  items-center h-[50px] w-[70px] text-lg">
          <h1>Skills</h1>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={react}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>

        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={node}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={next}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={tailwind}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={framer}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={ant}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
        <div className="relative flex justify-center  items-center h-[50px] w-[50px] border-2 border-solid  border-blue-600  text-white  rounded-full ">
          <Image
            src={typescript}
            alt="react-image"
            height={30}
            width={40}
            className=""
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
