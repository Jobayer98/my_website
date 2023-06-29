import Skill from "./Skills/Skill";

const Skills = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mt-16 mb-8">My Skills</h1>
      <div className="flex justify-center gap-20">
        <div className="w-1/2">
          <Skill title={"JavaScript"} prog={"80%"} />
          <Skill title={"TypeScript"} prog={"70%"} />
          <Skill title={"Python"} prog={"70%"} />
          <Skill title={"Java"} prog={"60%"} />
        </div>
        <div className="w-1/2">
          <Skill title={"React.js"} prog={"90%"} />
          <Skill title={"Node.js"} prog={"70%"} />
          <Skill title={"Express.js"} prog={"70%"} />
          <Skill title={"Mongodb.js"} prog={"80%"} />
        </div>
      </div>
    </>
  );
};

export default Skills;
