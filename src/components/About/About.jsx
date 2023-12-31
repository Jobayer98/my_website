const About = () => {
  return (
    <div id="about" className="my-36 item3">
      <h1 className="text-3xl font-extrabold mb-8">About Me</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="lg:w-[60%] text-lg mb-4 text-gray-400">
          Hello there! I am a programmer, fullstack developer. I am very
          passionate and dedicated to my work. I love learn new thing.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="border-2 px-4 py-2 uppercase font-bold contact"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
