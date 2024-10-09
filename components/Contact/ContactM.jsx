"use client";
import React from "react";
import Image from "next/image";
import linkdin from "../../public/linkdin.png";
import github from "../../public/github.png";
import user from "../../public/user.png";
import { Dropdown, Space } from "antd";
import { useRouter } from "next/navigation";

const items = [
  {
    label: <h1>Mobile Number</h1>,
    key: "0",
  },
  {
    label: 7022154106,
    key: "1",
  },
];

const Contact = () => {
  const router = useRouter();

  const handleClickGit = () => {
    router.push("https://github.com/lohithpoojary64");
  };

  const handleClickLinkdin = () => {
    router.push("https://www.linkedin.com/in/lohith-poojary-64a741238/");
  };

  return (
    <div className=" lg:hidden flex justify-center items-center h-[30px] w-full">
      <div className="relative flex justify-between gap-[30px] items-center h-full w-[75%] border border-solid border-white rounded-xl p-5">
        <h1 className="text-white text-xs">Contact Me</h1>
        <div className="flex justify-between items-center w-[60%]">
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="overflow-hidden relative flex justify-center items-center h-[32px] w-[32px] border-2 border-solid border-blue-600 text-white rounded-full">
                  <Image src={user} alt="user" height={50} width={50} />
                </div>
              </Space>
            </a>
          </Dropdown>

          <div
            className="overflow-hidden relative flex justify-center items-center h-[30px] w-[30px] border-2 border-solid border-blue-600 text-white rounded-full cursor-pointer"
            onClick={handleClickGit}
          >
            <Image src={github} alt="github" height={50} width={50} />
          </div>

          {/* Move the onClick to the div containing the Image */}
          <div
            className="overflow-hidden relative flex justify-center items-center h-[30px] w-[30px] border-2 border-solid border-blue-600 text-white rounded-full cursor-pointer"
            onClick={handleClickLinkdin} // onClick on the parent div
          >
            <Image
              src={linkdin}
              alt="linkdin"
              height={50}
              width={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
