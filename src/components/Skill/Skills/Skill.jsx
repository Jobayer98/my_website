import "./Skill.css";
const Skill = ({ title, prog }) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <div className="mb-6 h-[6px] w-full bg-neutral-200 dark:bg-neutral-200 rounded">
        <div
          className="h-[6px] bg-[#cf1f1f] progress relative rounded"
          style={{ width: prog }}
        >
          <p className="label absolute left-[94%] bottom-2">{prog}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
