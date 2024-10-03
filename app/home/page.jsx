import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import React from "react";

const page = () => {
  return (
    <main className="bg-black min-h-screen h-[300vh] w-[100%]">
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects/>
    </main>
  );
};

export default page;
