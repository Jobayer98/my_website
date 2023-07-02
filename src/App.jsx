import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css";

const App = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="text-center lg:w-[80%] lg:ml-[20%] px-[52px] py-[24px] bg-[#020312]">
        <Banner />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default App;
