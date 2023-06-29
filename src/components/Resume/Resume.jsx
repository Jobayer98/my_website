import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold mt-20 mb-8">My Resume</h1>
      <div className="flex justify-center items-center gap-16">
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Experiences</h2>
          <Experience />
        </div>
        <div>
          <h2 className="text-left text-2xl font-bold mb-4">Education</h2>
          <Education />
        </div>
      </div>
    </>
  );
};

export default Resume;
