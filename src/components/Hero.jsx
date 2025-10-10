// Hero.jsx
import { useRef, useEffect } from "react";
import Galaxy from "./Galaxy";
import Nav from "./Nav";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main hero section animation
      gsap.fromTo(heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );

      // Stagger animation for text elements
      gsap.fromTo([headingRef.current, textRef.current, buttonsRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          delay: 0.8
        }
      );

      // Floating animation for buttons
      gsap.to(buttonsRef.current?.children, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="w-full h-screen relative top-0 left-0 overflow-hidden" id="home">
      <div
        style={{ width: "100%", height: "100Vh", position: "relative" }}
      >
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={false}
          density={1.5}
          glowIntensity={0.3}
          saturation={0}
          hueShift={0}
        />
      </div>

      <div
        ref={contentRef}
        className="absolute top-69 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-2"
      >
        <h1 ref={headingRef} className="text-7xl font-bold mb-6 bbh-sans-bogle-regular">
          Crafting the Web, One Pixel at a Time
        </h1>

        <p ref={textRef} className="text-xl mb-6 leading-relaxed font-serif">
          Hi, I'm Aziz — a junior front-end developer passionate about building
          smooth, responsive, and user-friendly websites.
        </p>

        <div ref={buttonsRef} className="flex justify-center items-center gap-4 flex-wrap">
          <a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Hero;