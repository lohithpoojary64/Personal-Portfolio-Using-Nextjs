import React from "react";
import { Card, Carousel } from "antd";

const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
};

const AboutM = () => {
  return (
    <div className="lg:hidden relative h-[300px] w-full p-10 flex  overflow-y-auto  justify-between gap-3 items-center">
      <h3 style={contentStyle}>
        <Card
          title="About Me"
          bordered={false}
          style={{
            width: 300,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f0f2f5",
          }}
          hoverable
        >
          <h1 style={{ fontSize: "14px", color: "#595959" }}>
            I am <span className="font-bold">Lohith Poojary</span>, a passionate
            front-end developer with hands-on experience in creating{" "}
            <span className="font-bold">production-ready applications.</span>
          </h1>
        </Card>
      </h3>
      <h3 style={contentStyle}>
        <Card
          title="Technical Skills"
          bordered={false}
          style={{
            width: 300,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f0f2f5",
          }}
          hoverable
        >
          <h1 style={{ fontSize: "14px", color: "#595959" }}>
            <span className="font-bold">Front-end:</span> NextJs, ReactJs,
            Tailwind CSS, Ant Design, Framer.
            <br />
            <span className="font-bold">Backend:</span> Express, Mongoose,
            NodeJs.
            <br />
            <span className="font-bold">Languages:</span> JavaScript,
            TypeScript.
            <br />
            <span className="font-bold">Version Control:</span> Git, GitHub.
          </h1>
        </Card>
      </h3>
      <h3 style={contentStyle}>
        <Card
          title="Experience"
          bordered={false}
          style={{
            width: 300,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f0f2f5",
          }}
          hoverable
        >
          <h1 style={{ fontSize: "14px", color: "#595959" }}>
            Currently working as a front-end intern at{" "}
            <span className="font-bold">Tikanga Pvt Limited</span>, I specialize
            in React.js, Next.js, and Tailwind CSS, creating responsive,
            user-friendly web applications.
          </h1>
        </Card>
      </h3>
      <h3 style={contentStyle}>
        <Card
          title="Education"
          bordered={false}
          style={{
            width: 300,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            backgroundColor: "#f0f2f5",
          }}
          hoverable
        >
          <h1 style={{ fontSize: "14px", color: "#595959" }}>
            <p>
              <span className="font-bold">Graduation:</span> Bachelor's Degree
              in Computer Science
            </p>
            <p>
              <span className="font-bold">Location:</span> Udupi
            </p>
            <p>
              <span className="font-bold">Courses:</span> Full Stack Web
              Development (Tikanga Pvt Limited)
            </p>
          </h1>
        </Card>
      </h3>
    </div>
  );
};

export default AboutM;
