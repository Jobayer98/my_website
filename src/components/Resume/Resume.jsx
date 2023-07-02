import Education from "./Education/Education";
// import Experience from "./Experience/Experience";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="my-24">
      <h1 className="text-3xl font-extrabold">My Resume</h1>
      <div className="ml-36">
        {/* <div>
          <h2 className="text-left text-2xl font-bold mb-4">Experiences</h2>
          <Experience />
        </div> */}
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Education</h2>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Resume;
