import React from "react";
import { Card } from "antd";

const About = () => {
  return (
    <div className="hidden h-[300px] w-full p-10 lg:flex justify-between items-center">
      <Card
        title="About Me"
        bordered={false} // Remove border if you prefer a cleaner look
        style={{
          width: 300, // Adjust width as per your requirement
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#f0f2f5", // Background color
        }}
        hoverable={true} // Makes the card interactive on hover
      >
        <h1 style={{ fontSize: "14px", color: "#595959" }}>
          I am <span className="font-bold">Lohith Poojary</span> , a passionate
          front-end developer with hands-on experience in creating{" "}
          <span className="font-bold">production-ready applications.</span>
        </h1>
      </Card>

      <Card
        title="Technical Skills"
        bordered={false} // Remove border if you prefer a cleaner look
        style={{
          width: 300, // Adjust width as per your requirement
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#f0f2f5", // Background color
        }}
        hoverable={true} // Makes the card interactive on hover
      >
        <h1 style={{ fontSize: "14px", color: "#595959" }}>
          <span className="font-bold">Front-end : </span> NextJs , ReactJs ,
          Tailwind css , Ant Design , Framer.
          <br />
          <span className="font-bold">Backend : </span> Express , Mongoose ,
          NodeJs.
          <br />
          <span className="font-bold">Languages : </span> Javascript ,
          Typescript.
          <br />
          <span className="font-bold">Version Control : </span> Git , GitHub.
          <br />
        </h1>
      </Card>
      <Card
        title="Experience"
        bordered={false} // Remove border if you prefer a cleaner look
        style={{
          width: 300, // Adjust width as per your requirement
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#f0f2f5", // Background color
        }}
        hoverable={true} // Makes the card interactive on hover
      >
        <h1 style={{ fontSize: "14px", color: "#595959" }}>
          Currently working as a front-end intern at{" "}
          <span className="font-bold">Tikanga Pvt Limited</span> , I specialize
          in React.js, Next.js, and Tailwind CSS, creating responsive,
          user-friendly web applications.
        </h1>
      </Card>
      <Card
        title="Education"
        bordered={false} // Remove border if you prefer a cleaner look
        style={{
          width: 300, // Adjust width as per your requirement
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#f0f2f5", // Background color
        }}
        hoverable={true} // Makes the card interactive on hover
      >
        <h1 style={{ fontSize: "14px", color: "#595959" }}>
          <p>
            <span className="font-bold">Graduation : </span> Bachelors Degree In
            Computer Science
          </p>
          <p>
            <span className="font-bold">Location :</span> Udupi
          </p>
          <p><span className="font-bold">Cources : </span> Full Stack Web Development (Tikanga pvt Limited)</p>
        </h1>
      </Card>
    </div>
  );
};

export default About;
