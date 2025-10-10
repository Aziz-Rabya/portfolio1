"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white py-20 px-6"
    >
      <motion.div
        className="max-w-xl w-full text-center bg-[#0f0f0f]/70 backdrop-blur-md rounded-3xl p-10 border border-[#1a1a1a] shadow-[0_0_25px_rgba(255,255,255,0.05)]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight" variants={itemVariants}>
          Get in Touch
        </motion.h2>

        <motion.p className="text-gray-400 mb-10 leading-relaxed" variants={itemVariants}>
          Feel free to reach out for collaborations, projects, or just to say hi 👋
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] focus:border-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] focus:border-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          <motion.div variants={itemVariants}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] focus:border-gray-400 outline-none resize-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 rounded-xl bg-transparent border border-gray-500 hover:bg-gray-500/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 font-semibold tracking-wide"
            variants={itemVariants}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

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