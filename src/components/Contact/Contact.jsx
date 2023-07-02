const Contact = () => {
  return (
    <div id="contact" className="lg:px-40">
      <h1 className="text-3xl font-bold mt-24 mb-8">Get In Touch</h1>
      <form className="flex flex-col gap-4 text-left">
        <div className="lg:flex gap-4">
          <div className="lg:w-1/2">
            <label className="block mb-2" htmlFor="Name">
              Name
            </label>
            <input
              className="bg-[#ffffff1a]  border-none  pl-2 py-2 w-full outline-none hover:bg-[#2d2e3a]"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <label className="block mb-2" htmlFor="Email">
              Email
            </label>
            <input
              className="bg-[#ffffff1a] border-none  pl-2 py-2 w-full outline-none hover:bg-[#2d2e3a]"
              type="email"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="bg-[#ffffff1a] border-none   pl-2 py-2 w-full outline-none hover:bg-[#2d2e3a]"
            type="text"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label className="block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-[#ffffff1a] border-none  pl-2 py-2 w-full outline-none resize-none hover:bg-[#2d2e3a]"
            name="message"
            id=""
            cols="20"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            value="send email"
            className="mt-3 px-4 py-2 bg-[#cf1f1f] hover:scale-110 transition-all duration-200 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
