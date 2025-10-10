import { motion } from "framer-motion";
import Galaxy from "./Galaxy";
import Nav from "./Nav";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 25px rgba(255, 255, 255, 0.15)",
  };

  const buttonTap = {
    scale: 0.95,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  };

  return (
    <div className="w-full h-screen relative top-0 left-0 overflow-hidden" id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
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
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-7xl font-bold mb-6 bbh-sans-bogle-regular" variants={itemVariants}>
          Crafting the Web, One Pixel at a Time
        </motion.h1>

        <motion.p className="text-xl mb-8 leading-relaxed font-serif" variants={itemVariants}>
          Hi, I'm Aziz — a junior front-end developer passionate about building
          smooth, responsive, and user-friendly websites.
        </motion.p>

        <motion.div className="flex justify-center items-center gap-4 flex-wrap" variants={itemVariants}>
          <motion.a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={buttonHover}
            whileTap={buttonTap}
            href="#projects"
          >
            Projects
          </motion.a>

          <motion.a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg transition-all duration-300"
            whileHover={buttonHover}
            whileTap={buttonTap}
            href="#contact"
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      <Nav />
    </div>
  );
};

export default Hero;