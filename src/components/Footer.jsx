// Footer.jsx
import React, { useRef, useEffect } from 'react';
import { Github, Linkedin, Twitter} from 'lucide-react';
import { gsap } from "gsap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);
  const copyrightRef = useRef(null);
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Aziz-Rabya",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aziz-rabya-2a77a6375/",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://x.com/JESSE__2020",
      label: "Twitter"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer entrance
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }
      );

      // Stagger animation for content
      gsap.fromTo([contentRef.current, socialRef.current, copyrightRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3
        }
      );

      // Animate social icons individually
      gsap.fromTo(".social-icon",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.5
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-12 md:py-16 border-t border-slate-800/50 mt-30">
      <div ref={contentRef} className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Rabya Aziz</h3>
          <p className="text-slate-400 mt-1 text-sm md:text-base">Web Developer !</p>
        </div>

        <div ref={socialRef} className="flex gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon p-2 rounded-full bg-slate-800 transition-all duration-300 hover:bg-slate-700 hover:scale-110"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div ref={copyrightRef} className="mt-2 md:mt-12 text-center text-slate-500">
        <p className="flex justify-center items-center gap-2 text-xs md:text-sm">
          Made by Rabya Aziz © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;