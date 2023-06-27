const About = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold my-16">About Me</h1>
      <div className="flex items-start">
        <div className="w-1/2">
          <img
            src="http://www.themestarz.net/html/selfer/assets/img/img-man-looking.jpg"
            alt=""
          />
        </div>
        <div className="w-1/2 text-left mt-16">
          <p className="w-[80%] text-lg mb-4">
            Hello there! I am a fullstack developer. I am very passionate and
            dedicated to my work. I love learn new thing.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg font-bold text-orange-600">
            <div>
              <h3>Email:</h3>
              <p className="text-md font-normal text-gray-950">
                jobayerrahman0220@gmail.com
              </p>
            </div>
            <div>
              <h3>Phone:</h3>
              <p className="text-md font-normal text-gray-950">01600015495</p>
            </div>
            <div>
              <h3>Linkedin:</h3>
              <p className="text-md font-normal text-gray-950">Jobayer</p>
            </div>
          </div>
          <button className="mt-8 border-2 px-4 py-2 uppercase font-semibold">
            Contact me
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
