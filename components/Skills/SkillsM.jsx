import React from "react";
import react from "../../public/react.png";
import node from "../../public/node.png";
import next from "../../public/next.svg";
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
    <div className="h-[300px] w-full lg:hidden mt-6">
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
        <div>
          <h3 style={contentStyle}>
            <Image src={react} alt="image" height={10} width={10}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={react} alt="image" height={10} width={10}></Image>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Image src={react} alt="image" height={10} width={10}></Image>
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default SkillsM;
