import React from "react";
import { Card } from "antd";

const About = () => {
  return (
    <div className=" h-[300px] w-full p-10 flex justify-between items-center">
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
        <p style={{ fontSize: "14px", color: "#595959" }}>
          I am Lohith Poojary, a passionate front-end developer with hands-on
          experience in creating production-ready applications.
        </p>
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
        <p style={{ fontSize: "14px", color: "#595959" }}>
          Currently working as a front-end intern at Tikanga Pvt Limited, I
          specialize in React.js, Next.js, and Tailwind CSS, creating
          responsive, user-friendly web applications.
        </p>
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
        <p style={{ fontSize: "14px", color: "#595959" }}>
          Front-end : NextJs , ReactJs , Tailwind css , Ant Design , Framer.
          Backend : Express , Mongoose , NodeJs.
          Languages : Javascript , Typescript.
          Version Control : Git , GitHub.
        </p>
      </Card>
      <Card
        title="About Us"
        bordered={false} // Remove border if you prefer a cleaner look
        style={{
          width: 300, // Adjust width as per your requirement
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for depth
          borderRadius: "8px", // Rounded corners
          backgroundColor: "#f0f2f5", // Background color
        }}
        hoverable={true} // Makes the card interactive on hover
      >
        <p style={{ fontSize: "14px", color: "#595959" }}>
          We are committed to providing the best service with a focus on quality
          and user satisfaction. Our team strives to deliver top-notch solutions
          for your needs.
        </p>
      </Card>
    </div>
  );
};

export default About;
