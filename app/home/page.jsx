import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import NavbarM from "@/components/Navbar/NavbarM";
import HeaderM from "@/components/Header/HeaderM";
import React from "react";
import SkillsM from "@/components/Skills/SkillsM";

const page = () => {
  return (
    <main className="bg-black min-h-screen h-[300vh] w-[100%]">
      <Navbar />
      <NavbarM />
      <Header />
      <HeaderM />
      <Skills />
      <SkillsM />
      <About />
      <Projects />
    </main>
  );
};

export default page;
