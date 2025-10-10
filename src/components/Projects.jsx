import { ProjectsList } from "../../constants";
import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified animations - reduce the number of separate animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(sectionRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      ).fromTo([headingRef.current, titleRef.current],
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 },
        "-=0.5"
      ).fromTo(projectsRef.current,
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Performance optimizations
  const handleImageLoad = (e) => {
    // Optional: Add lazy loading optimization
    e.target.classList.add('loaded');
  };

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col gap-8 m-4 p-3 mb-20"
      id="projects"
    >
      <div>
        <h4 ref={headingRef} className="text-gray-400">
          Featured
        </h4>
        <h1 ref={titleRef} className="text-white text-5xl font-extrabold">
          PROJECTS.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ProjectsList.map((project, index) => (
          <div
            key={project.id || index}
            ref={el => projectsRef.current[index] = el}
            className="group cursor-pointer relative overflow-hidden border border-gray-700 rounded-lg bg-transparent hover:border-gray-500 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="p-5 rounded-lg h-full flex flex-col">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image1} 
                  alt={project.title}
                  loading="lazy" // Lazy loading
                  decoding="async" // Async decoding
                  onLoad={handleImageLoad}
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2.5 py-0.5 bg-gray-800/70 text-gray-300 text-xs rounded-full transition-colors duration-300 hover:bg-gray-700/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 mt-auto">
                {project.source_code_link && (
                  <a 
                    href={project.source_code_link}
                    className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-gray-600 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-500 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Code</span>
                  </a>
                )}
                {project.demo_link && (
                  <a 
                    href={project.demo_link}
                    className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-gray-600 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-500 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;