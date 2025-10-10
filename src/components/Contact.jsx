"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwprroop");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setTimeout(() => window.location.reload(), 2000);
    } else if (state.errors?.length > 0) {
      toast.error("Failed to send message. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center text-white py-20 px-6"
    >
      <div
        className="max-w-xl w-full text-center bg-[#0f0f0f]/70 backdrop-blur-md rounded-3xl p-10 border border-[#1a1a1a] shadow-[0_0_25px_rgba(255,255,255,0.05)]"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Feel free to reach out for collaborations, projects, or just to say hi 👋
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 rounded-xl bg-transparent border border-gray-500 font-semibold tracking-wide"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;