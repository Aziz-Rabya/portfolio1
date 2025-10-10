"use client";
import { useRef, useEffect } from "react";
import MagicBento from './MagicBento';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire section
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stagger animation for children
      gsap.fromTo([headingRef.current, titleRef.current, textRef.current, bentoRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      className="flex flex-col gap-10 m-4 p-3"
      id="about"
    >
      <div>
        <h4 ref={headingRef} className="text-gray-400">
          Introduction
        </h4>
        
        <h1 ref={titleRef} className="text-white text-5xl font-extrabold">
          OVERVIEW.
        </h1>
        
        <p ref={textRef} className="text-white max-w-3xl text-2xl leading-7 font-serif mt-9">
          I'm a skilled software developer with experience in JavaScript, 
          and expertise in frameworks like React, Next.js, and
          Tailwind css. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>

      <div ref={bentoRef}>
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 255, 255"
        />
      </div>
    </section>
  );
};

export default About;