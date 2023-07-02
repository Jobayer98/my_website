import Skill from "./Skills/Skill";

const Skills = () => {
  return (
    <div id="skills" className="lg:px-20 item3">
      <h1 className="text-3xl font-extrabold mt-20 mb-8">My Skills</h1>
      <div className="lg:flex justify-center gap-20">
        <div className="lg:w-1/2">
          <Skill title={"JavaScript"} prog={"85%"} />
          <Skill title={"TypeScript"} prog={"70%"} />
          <Skill title={"Python"} prog={"70%"} />
          <Skill title={"Java"} prog={"60%"} />
        </div>
        <div className="lg:w-1/2">
          <Skill title={"React.js"} prog={"80%"} />
          <Skill title={"Node.js"} prog={"70%"} />
          <Skill title={"Express.js"} prog={"70%"} />
          <Skill title={"Mongodb.js"} prog={"60%"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
