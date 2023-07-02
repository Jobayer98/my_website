import { Typography } from "antd";
const { Title, Paragraph } = Typography;
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import img from "../../assets/banner.png";

const Banner = () => {
  return (
    <div id="home" className="flex items-center gap-8 mx-2 item-3">
      <div className="flex  flex-col text-left lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-[#cf1f1f]">Hi,</span> I am
        </h2>
        <h1 className="text-5xl font-bold mb-5"> Jobayer Rahman</h1>
        <Title
          level={4}
          style={{ fontWeight: "bold", marginBottom: "20px", color: "#cf1f1f" }}
        >
          A{" "}
          <Typewriter
            words={["Programmer", "Fullstack Developer", "Problem Solver"]}
            cursor
            cursorStyle="|"
            loop={false}
            typeSpeed={120}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </Title>
        <Paragraph className="text-lg text-gray-400">
          Hello there! I am a programmer and fullstack developer. I am very
          passionate and dedicated to my work. I love learn new thing.
        </Paragraph>
        <button className="border w-40 py-2 btn_resume">Download Resume</button>
      </div>
      <div className="lg:w-1/2">
        <img
          className="h-[500px] hidden lg:block"
          src={img}
          alt="jobayer"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Banner;
