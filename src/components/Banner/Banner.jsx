import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="flex items-center gap-8 mx-2">
      <div className="flex  flex-col text-left w-1/2">
        <h2 className="text-2xl font-bold mb-2">Hi, I am</h2>
        <h1 className="text-6xl font-bold mb-5"> Jobayer Rahman</h1>
        <Title level={4} style={{ fontWeight: "bold", marginBottom: "20px" }}>
          I am Passionate{" "}
          <Typewriter
            words={["Programmer", "Developer"]}
            cursor
            cursorStyle="|"
            loop={false}
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </Title>
        <Paragraph className="text-lg">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </Paragraph>
        <button className="btn_resume">Download Resume</button>
      </div>
      <div className="w-1/2">
        <img
          src="https://sergio-react.vercel.app/static/img/home-banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
