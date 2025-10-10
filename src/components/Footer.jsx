import React from 'react';
import { Github, Linkedin, Twitter} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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

  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t border-slate-800/50 mt-30">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white">Rabya Aziz</h3>
          <p className="text-slate-400 mt-1 text-sm md:text-base">Web Developer !</p>
        </div>

        <div className="flex gap-3 md:gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-2 md:mt-12 text-center text-slate-500">
        <p className="flex justify-center items-center gap-2 text-xs md:text-sm">
          Made by Rabya Aziz © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;