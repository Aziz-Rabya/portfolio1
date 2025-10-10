// Contact.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [state, handleSubmit] = useForm("xwprroop");
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setTimeout(() => window.location.reload(), 2000);
    } else if (state.errors?.length > 0) {
      toast.error("Failed to send message. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(containerRef.current,
        { scale: 0.8, opacity: 0, rotationY: 10 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stagger form elements
      const formElements = formRef.current?.querySelectorAll('input, textarea, button') || [];
      gsap.fromTo(formElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center text-white py-20 px-6"
    >
      <div
        ref={containerRef}
        className="max-w-xl w-full text-center bg-[#0f0f0f]/70 backdrop-blur-md rounded-3xl p-10 border border-[#1a1a1a] shadow-[0_0_25px_rgba(255,255,255,0.05)]"
      >
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Get in Touch
        </h2>

        <p ref={textRef} className="text-gray-400 mb-10 leading-relaxed">
          Feel free to reach out for collaborations, projects, or just to say hi 👋
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none transition-all duration-300 focus:border-white focus:scale-105"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none transition-all duration-300 focus:border-white focus:scale-105"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-[#121212] text-white border border-[#222] outline-none resize-none transition-all duration-300 focus:border-white focus:scale-105"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 rounded-xl bg-transparent border border-gray-500 font-semibold tracking-wide transition-all duration-300 hover:border-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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