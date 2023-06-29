const About = () => {
  return (
    <div id="about">
      <h1 className="text-3xl font-extrabold mt-20 mb-8">About Me</h1>
      <div className="flex items-start">
        <div className="w-[40%]">
          <img
            className="h-96"
            src="http://www.themestarz.net/html/selfer/assets/img/img-man-looking.jpg"
            alt=""
          />
        </div>
        <div className="w-[60%] text-left mt-16">
          <p className="w-[80%] text-lg mb-4 text-gray-300">
            Hello there! I am a fullstack developer. I am very passionate and
            dedicated to my work. I love learn new thing.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg font-bold ">
            <div>
              <h3 className="text-[#cf1f1f]">Email:</h3>
              <p className="text-md font-normal">jobayerrahman0220@gmail.com</p>
            </div>
            <div>
              <h3 className="text-[#cf1f1f]">Phone:</h3>
              <p className="text-md font-normal">01600015495</p>
            </div>
            <div>
              <h3 className="text-[#cf1f1f]">Linkedin:</h3>
              <p className="text-md font-normal">Jobayer</p>
            </div>
          </div>
          <button className="mt-8 border-2 px-4 py-2 uppercase font-bold contact">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
