import React from "react";

const Projects = () => {
  return (
    <div className=" h-[500px] w-full p-10">
      <div className="border border-solid border-white h-full w-full rounded-2xl p-10 text-white">
        <div>
          <h1 className="font-bold text-xl">Production Projects</h1>
          <ul className="list-none mt-3 border border-solid border-white rounded-3xl p-6">
            <li className="font-bold">
              MyPayLink{" "}
              <span className="text-sm font-light">(Private Project)</span>
            </li>
            <div className="px-3">
              <ul>
                <li>
                  <span className="font-bold">TechStack : </span> NextJs ,
                  Typescript , antd , Tailwind css.
                </li>
                <li>
                  My role was to develop and integrate Login page, SignUp page ,
                  Verification Page , User Shared Links pages
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-xl">Personal Projects</h1>
          <ul className="list-none mt-3 border border-solid border-white rounded-3xl p-6">
            <li className="font-bold">
              
              <span className="text-sm font-light">(Private Project)</span>
            </li>
            <div className="px-3">
              <ul>
                <li>
                  <span className="font-bold">TechStack : </span> NextJs ,
                  Typescript , antd , Tailwind css.
                </li>
                <li>
                  My role was to develop and integrate Login page, SignUp page ,
                  Verification Page , User Shared Links pages
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
