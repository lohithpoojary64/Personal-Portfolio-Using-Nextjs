"use client";
import React from "react";
import Form from "../../components/Form";

const Contact = () => {
  return (
    <div className="flex  justify-center items-center bottom-2 h-[500px] w-full ">
      <div className=" flex flex-col  gap-[30px] items-center h-full w-[80%] border border-solid border-white rounded-xl p-5 ">
        <div className="flex justify-start h-full w-30%">
          <h1 className="font-bold text-white text-3xl">Contact Me</h1>
        </div>
        <div className="h-full w-[60%]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
