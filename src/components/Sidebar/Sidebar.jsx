import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="bg-[#000011] h-full flex flex-col justify-between  overflow-hidden pl-8">
      <div>
        <img
          className=" h-28 w-28 rounded-full ring-4 ring-slate-100 mt-16"
          src="https://sergio-react.vercel.app/static/img/about-me.jpg"
          alt="me"
        />
      </div>
      <ul className="uppercase font-semibold text-xs flex flex-col gap-3 -mt-10 list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>

      <div>
        <a href="">facebook</a>
        <a href="">Linkedin</a>
        <a href="">Twitter</a>
      </div>
    </aside>
  );
};

export default Sidebar;
