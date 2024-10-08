import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Projects from "@/components/Project/Projects";
import NavbarM from "@/components/Navbar/NavbarM";
import HeaderM from "@/components/Header/HeaderM";
import SkillsM from "@/components/Skills/SkillsM";
import AboutM from "@/components/About/AboutM";
import ProjectsM from '@/components/Project/ProjectsM'
import React from "react";
import Contact from "@/components/Contact/Contact";


const page = () => {
  return (
    <main className="bg-black min-h-screen h-[400vh] w-[100%]">
      <Navbar />
      <NavbarM />
      <Header />
      <HeaderM />
      <Skills />
      <SkillsM />
      <About />
      <AboutM/>
      <Projects />
      <ProjectsM/>
      <Contact/>
    </main>
  );
};

export default page;
