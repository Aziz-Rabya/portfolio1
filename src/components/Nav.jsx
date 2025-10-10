// Nav.jsx
import { navLinks } from "../../constants";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate nav entrance
      gsap.fromTo(navRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1 }
      );

      // Animate logo
      gsap.fromTo(logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)", delay: 1.2 }
      );

      // Animate nav links with stagger
      gsap.fromTo(linksRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 1.4
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-0 right-0 w-full max-w-4xl mx-auto h-20 rounded-full z-50 flex items-center justify-between px-6 bg-transparent backdrop-blur-2xl transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div ref={logoRef} className="flex items-center gap-2">
        <img src="/Logo.png" alt="logo" className="w-12 h-auto transition-transform duration-300 hover:scale-110" />
      </div>

      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li key={link.id}>
            <a
              ref={el => linksRef.current[index] = el}
              href={`#${link.id}`}
              className="text-white font-medium block transition-all duration-300 hover:text-gray-300 hover:scale-110"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;