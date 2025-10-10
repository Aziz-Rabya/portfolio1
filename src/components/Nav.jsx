import { motion, useAnimation } from "framer-motion";
import { navLinks } from "../../constants";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const controls = useAnimation();

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    },
  };

  const scrollVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hidden: { y: -100, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, duration: 0.8, delay: 0.4 }
    },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.6, staggerChildren: 0.1 }
    }
  };

  const linkItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { y: -2, color: "#d1d5db", transition: { duration: 0.2 } }
  };

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
    if (!hasAnimatedIn) {
      controls.start("visible");
      setHasAnimatedIn(true);
    }
  }, [hasAnimatedIn, controls]);

  useEffect(() => {
    if (hasAnimatedIn) {
      controls.start(isVisible ? "visible" : "hidden");
    }
  }, [isVisible, hasAnimatedIn, controls]);

  return (
    <motion.nav
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto h-20 rounded-full z-30 flex items-center justify-between p-6 bg-transparent bg-opacity-20 backdrop-blur-md mt-4"
      variants={hasAnimatedIn ? scrollVariants : navVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="flex items-center gap-2"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <img src="/Logo.png" alt="logo" className="w-12 h-auto" />
      </motion.div>

      <motion.ul
        className="flex gap-6"
        variants={linkContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            variants={linkItemVariants}
            whileHover="hover"
          >
            <a
              href={`#${link.id}`}
              className="text-white hover:text-gray-300 transition-colors font-medium block"
            >
              {link.title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Nav;