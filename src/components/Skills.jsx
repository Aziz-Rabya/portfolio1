import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGithub,
  SiGit,
  SiPython,
  SiSupabase,
} from "react-icons/si";

const Skills = () => {
  const techLogos = [
    {
      node: <SiReact size={60} color="white" />,
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiHtml5 size={60} color="white" />,
      title: "Next.js",
      href: "https://en.wikipedia.org/wiki/HTML5",
    },
    {
      node: <SiNextdotjs size={60} color="white" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss size={60} color="white" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiCss3 size={60} color="white" />,
      title: "Next.js",
      href: "https://www.css3.info/",
    },
    {
      node: <SiMongodb size={60} color="white" />,
      title: "Next.js",
      href: "https://www.mongodb.com/",
    },
    {
      node: <SiGithub size={60} color="white" />,
      title: "Next.js",
      href: "https://github.com/",
    },
    {
      node: <SiGit size={60} color="white" />,
      title: "Next.js",
      href: "https://git-scm.com/",
    },
    {
      node: <SiPython size={60} color="white" />,
      title: "Next.js",
      href: "https://www.python.org/",
    },
    {
      node: <SiSupabase size={60} color="white" />,
      title: "Next.js",
      href: "https://supabase.com/",
    },
  ];

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

  const titleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const logoContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <motion.section 
      className="flex flex-col mt-10 p-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      id="skills"
    >
      <motion.div 
        className="m-5 p-2"
        variants={itemVariants}
      >
        <motion.h4 
          className="text-gray-400"
          variants={titleVariants}
        >
          Technologies and 
        </motion.h4>
        <motion.h1 
          className="text-white text-5xl font-extrabold"
          variants={titleVariants}
        >
          SKILLS.
        </motion.h1>
      </motion.div>

      <motion.div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginTop: "70px",
          backgroundColor: "#000000",
        }}
        variants={logoContainerVariants}
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
      </motion.div>
    </motion.section>
  );
};

export default Skills;