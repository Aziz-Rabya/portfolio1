
const Contact = () => {
  return (
    <section
      style={{ position: "relative", minHeight: "100vh" }}
      className="flex mt-25"
    >
      {/* Content Container - Centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Header Section - Centered */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h4 className="text-gray-400 text-lg font-medium mb-4">
            Get In Touch
          </h4>
          <h1 className="text-white text-5xl font-extrabold mb-8">CONTACT.</h1>
        </div>

        {/* Form Container - Centered with consistent spacing */}
        <form className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl mx-auto">
          {/* Name Field */}
          <div className="mb-8">
            <label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-8">
            <label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              type="email"
              name="Email"
              id="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-10">
            <label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 h-52 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              name="Message"
              id="message"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              required
            ></textarea>
          </div>

          {/* Submit Button - Centered */}
          <div className="flex justify-center">
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;