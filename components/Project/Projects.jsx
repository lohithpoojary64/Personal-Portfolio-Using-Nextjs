"use client";
import React from "react";
import Image from "next/image";
import main from "../../public/Projects/MypayLinkMobile.png";
import mobile from "../../public/Projects/mobile.png";
import { easeIn, motion } from "framer-motion";

const Projects = () => {
  return (
    <div className=" h-[500px] w-full p-10">
      <div className="h-full w-full rounded-2xl p-10 text-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl">Production Projects</h1>
          <div className=" mt-5 h-[550px] w-[50%] flex justify-between items-center">
            <div className="relative h-full w-[50%]">
              {" "}
              <motion.div
                whileHover={{ scale: 1.05 }} // Zoom and shadow on hover
                transition={{ duration: 0.3 }} // Control the speed of zoom
                className="relative h-full w-[100%] "
              >
                <Image
                  src={main}
                  alt="main-image"
                  height={300}
                  width={300}
                  className="relative h-full w-[100%] bg-transparent"
                />

                <motion.div
                  whileHover={{ backgroundSize: "300px" , rotateX:2 }} // Zoom and shadow on hover
                  transition={{ duration:5,ease: 'easeInOut' }} // Control the speed of zoom
                  className="absolute z-[-1] h-[300px] w-[300px] bg-white rounded-full blur-xl bottom-3"
                ></motion.div>

                <Image
                  src={mobile}
                  alt="mobile-screen"
                  height={300}
                  width={300}
                  className="h-[70%] w-[45%] absolute top-10 left-[13%]"
                ></Image>
              </motion.div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Projects;
