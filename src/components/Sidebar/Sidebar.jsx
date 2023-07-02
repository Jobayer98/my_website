import "./Sidebar.css";
import { BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import img from "../../assets/img_pro.jpg";
const Sidebar = () => {
  return (
    <aside className="w-[20%] bg-[#000011] h-full flex flex-col justify-between items-center overflow-hidden fixed">
      <div>
        <img
          className=" h-28 w-28 rounded-full ring-4 ring-slate-100 mt-16"
          src={img}
          alt="jobayer"
          draggable="false"
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

      <div className="flex items-center justify-center gap-4 -ml-4 mb-2">
        <a href="https://www.linkedin.com/in/jobayer-rahman-5b0860184/">
          <BiLogoLinkedin className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/rashed.khan.jubayer">
          <FaFacebookF className="text-xl" />
        </a>
        <a href="#">
          <BiLogoTwitter className="text-2xl" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
