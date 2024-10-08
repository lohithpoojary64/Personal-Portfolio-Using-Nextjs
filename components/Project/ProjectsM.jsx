"use client";
import React from "react";
import Image from "next/image";
import main from "../../public/Projects/MypayLinkMobile.png";
import mobile from "../../public/Projects/mobile.png";
import vitePe from "../../public/Projects/Vitepe.png";
import { easeIn, motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="relative lg:hidden h-[800px] w-full  ">
      <div className="h-full w-full rounded-2xl p-10 text-white">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl">Production Projects</h1>
          <div className="overflow-hidden mt-[30px] h-[300px] w-[100%]   border border-solid border-white rounded-3xl ">
            <div className="w-[100%] h-full p-3 overflow-y-auto">
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
                className="mr-2 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold"
              >
                MyPayLink
              </motion.span>
              <div className="font-bold text-slate-400 text-xs">
                <h1>
                  I contributed to the development of{" "}
                  <span className="text-white">MyPayLink</span> , a{" "}
                  <span className="text-white">secure payment app</span>{" "}
                  designed for seamless financial transactions. My role involved
                  implementing key features such as:
                </h1>
                <ul className="mt-4 list-dotted">
                  <li>
                    <span className="text-white">User Authentication:</span>{" "}
                    Developed a smooth login and sign-up process with robust
                    verification mechanisms for user security.
                  </li>
                  <li>
                    {" "}
                    <span className="text-white">Profile Management:</span>{" "}
                    Created a user-friendly profile section that allows users to
                    manage their personal information with ease.
                  </li>
                  <li>
                    {" "}
                    <span className="text-white">Payment Links:</span>{" "}
                    Engineered the functionality to generate and share secure
                    payment links, streamlining the payment process for users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mt-[30px] h-[300px] w-[100%]   border border-solid border-white rounded-3xl ">
          
            <div className="w-[100%] h-full p-3 overflow-y-auto">
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
                className="mr-2 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-bold"
              >
                VitePe
              </motion.span>
              <div className="font-bold text-slate-400 text-xs">
                <h1>
                  As a contributor to VitePay, a dynamic payment application, I
                  played a key role in developing the "Add Offers" page. This
                  feature enables administrators to efficiently manage
                  promotional offers by adding new ones and removing outdated
                  ones, enhancing the overall user experience and functionality
                  of the app. My work involved collaborating with the team to
                  design an intuitive interface, ensuring seamless integration
                  with the existing system, and implementing robust
                  functionality for offer management.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Projects;
