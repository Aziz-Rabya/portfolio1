import { motion } from "framer-motion";
import ElectricBorder from "./ElectricBorder";
import { ProjectsList } from "../../constants";
import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = '159, 167, 174';
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = false,
  index = 0
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
    };

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, clickEffect, glowColor]);

  return (
    <motion.div
      ref={cardRef}
      className={`${className} project-card relative overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const Projects = () => {
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = isMobile;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="flex flex-col gap-10 m-4 p-3 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      id="projects"
    >
      <motion.div variants={itemVariants}>
        <motion.h4 className="text-gray-400" variants={itemVariants}>
          Featured
        </motion.h4>
        <motion.h1 className="text-white text-5xl font-extrabold" variants={itemVariants}>
          PROJECTS.
        </motion.h1>
      </motion.div>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {ProjectsList.map((project, index) => (
          <ParticleCard
            key={index}
            className="group cursor-pointer"
            disableAnimations={shouldDisableAnimations}
            clickEffect={true}
            particleCount={20}
            glowColor={DEFAULT_GLOW_COLOR}
            index={index}
          >
            <ElectricBorder
              color="#9fa7aa"
              speed={0.9}
              chaos={0.7}
              thickness={2}
              className="w-full h-full"
            >
              <motion.div 
                className="p-6 bg-transparent rounded-lg h-full flex flex-col"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <motion.div className="mb-5 overflow-hidden rounded-lg" whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
                  <img 
                    src={project.image1} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                
                <motion.h3 className="text-white text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  {project.title}
                </motion.h3>
                
                <motion.p className="text-gray-300 mb-4 flex-grow group-hover:text-white transition-colors" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  {project.description}
                </motion.p>
                
                <motion.div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full group-hover:bg-gray-500 transition-colors"
                      whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div className="flex gap-3 mt-auto">
                  {project.source_code_link && (
                    <motion.a 
                      href={project.source_code_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white hover:bg-white/10 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo_link && (
                    <motion.a 
                      href={project.demo_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white hover:bg-white/10 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Demo</span>
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </ElectricBorder>
          </ParticleCard>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;