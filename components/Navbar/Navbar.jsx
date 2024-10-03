"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="hidden w-[100%] h-[100px] lg:flex justify-center items-center ">
      <div className="relative w-[50%] h-[60px] flex justify-between items-center px-7  rounded-3xl text-white border border-solid border-white mt-6">
        <h1 className="font-bold">Lohith Poojary</h1>
        <div className="w-[80%]">
        <ul className="list-none flex justify-between">
        <Link href="/"><li>Resume</li></Link>
        <Link href="https://www.linkedin.com/in/lohith-poojary-64a741238/"><li>Linkdin</li></Link>
        <Link href="https://github.com/lohithpoojary64"><li>Github</li></Link>
        <Link href=""><li>Projects</li></Link>
        <Link href=""><li>Contact</li></Link>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
