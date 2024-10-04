import React from "react";
import react from "../../public/react.png";
import node from "../../public/node.png";
import next from '../../public/next.png'
import tailwind from "../../public/tailwind.svg";
import ant from "../../public/antd.svg";
import framer from "../../public/framer.svg";
import typescript from "../../public/typescript.svg";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  height: "60px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const SkillsM = () => {
  return (
    <div className="h-[200px] w-full lg:hidden mt-6">
      <div className="h-[20px] w-full flex justify-center items-center">
        <h1 className="text-slate-300 ">Skills</h1>
      </div>
      <Carousel autoplay>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={react}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={tailwind}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={node}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={typescript}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={ant}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={framer}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
        <div className=" p-6">
          <h3 style={contentStyle}>
            <div className="border bg-white overflow-hidden border-solid border-white h-[60px] w-[60px] p-1 rounded-full flex justify-center items-center">
              <Image
                src={next}
                alt="image"
                height={2}
                width={40}
                className="h-[20] w-[20]"
              ></Image>
            </div>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default SkillsM;
