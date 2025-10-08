import React from "react";
import Particles from "./Particles"

const Contact = () => {
  return (
    <section style={{ position: "relative", minHeight: "100vh", marginTop: "2rem" }}>
      {/* Particle Background */}
      <div style={{ 
        width: "100%", 
        height: "100%", 
        position: "absolute", 
        top: 0, 
        left: 0,
        zIndex: 1
      }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={2000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* Content Container - Centered */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}>
        {/* Header Section - Centered */}
        <div className="text-center mb-12 max-w-2xl">
          <h4 className="text-gray-400 text-lg font-medium mb-2">Get In Touch</h4>
          <h1 className="text-white text-5xl font-extrabold mb-6">CONTACT.</h1>
        </div>

        {/* Form Container - Centered */}
        <form className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Name Field */}
          <div className="mb-8">
            <label className="block mb-4 font-medium text-white text-lg text-center" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
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
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              type="email"
              name="Email"
              id="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Message Field - Made taller */}
          <div className="mb-10">
            <label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-4 h-52 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
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