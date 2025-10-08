import React from "react";
import { motion } from "framer-motion";
import MagicBento from './MagicBento';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const bentoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="flex flex-col gap-10 m-4 p-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="about"
    >
      <motion.div variants={itemVariants}>
        <motion.h4 
          className="text-gray-400"
          variants={titleVariants}
        >
          Introduction
        </motion.h4>
        
        <motion.h1 
          className="text-white text-5xl font-extrabold"
          variants={titleVariants}
        >
          OVERVIEW.
        </motion.h1>
        
        <motion.p 
          className="text-white max-w-3xl text-2xl leading-7 aguafina-script-regular mt-9"
          variants={textVariants}
        >
          I'm a skilled software developer with experience in JavaScript, 
          and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </motion.div>

      <motion.div
        variants={bentoVariants}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="255, 255, 255"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;