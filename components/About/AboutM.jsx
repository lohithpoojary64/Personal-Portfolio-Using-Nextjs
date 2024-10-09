import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  position: "relative",
  margin: 0,
  padding: "10px",
  height: "100%", // Set to 100% to ensure it takes the full height of the parent
  color: "black",
  lineHeight: "1.5", // Adjust for better readability
  textAlign: "center",
  background: "white",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const AboutM = () => {
  return (
    <div className="lg:hidden flex justify-center items-center">
      <div className="relative h-[200px] w-full p-2 overflow-hidden">
        <Carousel autoplay
          dotPosition="bottom"
          style={{ width: "100%", height: "100%", gap: "3px" }} // Ensure carousel takes full height and width
        >
          <div>
            <div style={contentStyle}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%", // Ensure full width
                  height: "100%", // Ensure full height
                }}
              >
                I am <span className="font-bold">Lohith Poojary</span>, a
                passionate front-end developer with hands-on experience in
                creating{" "}
                <span className="font-bold">
                  production-ready applications.
                  <br />
                </span>
                Join me as we embark on a transformative journey where
                creativity knows no bounds
              </p>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%", // Ensure full width
                  height: "100%", // Ensure full height
                }}
              >
                <span className="font-bold">Front-end : </span> NextJs , ReactJs
                , Tailwind css , Ant Design , Framer.
                <br />
                <span className="font-bold">Backend : </span> Express , Mongoose
                , NodeJs.
                <br />
                <span className="font-bold">Languages : </span> Javascript ,
                Typescript.
                <br />
                <span className="font-bold">Version Control : </span> Git ,
                GitHub.
                <br />
              </p>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%", // Ensure full width
                  height: "100%", // Ensure full height
                }}
              >
                Currently working as a front-end intern at{" "}
                <span className="font-bold">Tikanga Pvt Limited</span> ,<br/> I
                specialize in React.js, Next.js, and Tailwind CSS, creating
                responsive, user-friendly web applications.
                <br />
              </p>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%", // Ensure full width
                  height: "100%", // Ensure full height
                }}
              >
                During my internship at Tikanga Pvt Limited, <br/>I had the 
                opportunity to work on production-level projects, gaining<br/>
                valuable hands-on experience.<br/>
              </p>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <p
                style={{
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "100%", // Ensure full width
                  height: "100%", // Ensure full height
                }}
              >
                <span className="font-bold">Graduation : </span> Bachelors
                Degree In Computer Science
                <br />
                <span className="font-bold">Location :</span> Udupi
                <br />
                <span className="font-bold">Cources : </span> Full Stack Web
                Development (Tikanga pvt Limited)
                <br />
              </p>
            </div>
          </div>
        </Carousel>
        <div className='w-full flex justify-center items-center mt-2'>
         <h1 className='text-white text-sm'>Swipe for next... </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutM;
