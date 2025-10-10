// Skills.jsx
import { useRef, useEffect } from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGithub,
  SiGit,
  SiPython,
  SiSupabase,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const logoContainerRef = useRef(null);

  const techLogos = [
    { node: <SiReact size={60} color="white" />, href: "https://react.dev" },
    { node: <SiHtml5 size={60} color="white" />, href: "https://en.wikipedia.org/wiki/HTML5" },
    { node: <SiNextdotjs size={60} color="white" />, href: "https://nextjs.org/" },
    { node: <SiTailwindcss size={60} color="white" />, href: "https://tailwindcss.com" },
    { node: <SiCss3 size={60} color="white" />, href: "https://www.css3.info/" },
    { node: <SiMongodb size={60} color="white" />, href: "https://www.mongodb.com/" },
    { node: <SiGithub size={60} color="white" />, href: "https://github.com/" },
    { node: <SiGit size={60} color="white" />, href: "https://git-scm.com/" },
    { node: <SiPython size={60} color="white" />, href: "https://www.python.org/" },
    { node: <SiSupabase size={60} color="white" />, href: "https://supabase.com/" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
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

      // Heading animation
      gsap.fromTo([headingRef.current, titleRef.current],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Logo container animation
      gsap.fromTo(logoContainerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: logoContainerRef.current,
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
      className="flex flex-col mt-10 p-5"
      id="skills"
    >
      <div className="m-5 p-2">
        <h4 ref={headingRef} className="text-gray-400">
          Technologies and 
        </h4>
        <h1 ref={titleRef} className="text-white text-5xl font-extrabold">
          SKILLS.
        </h1>
      </div>

      <div
        ref={logoContainerRef}
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginTop: "70px",
          backgroundColor: "#000000",
        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Skills;