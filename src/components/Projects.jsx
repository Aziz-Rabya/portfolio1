// Projects.jsx
import ElectricBorder from "./ElectricBorder";
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
      // Section animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Heading animation
      gsap.fromTo([headingRef.current, titleRef.current],
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects grid animation
      gsap.fromTo(projectsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: projectsRef.current[0],
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="flex flex-col gap-10 m-4 p-3 mb-20"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsList.map((project, index) => (
          <div
            key={index}
            ref={el => projectsRef.current[index] = el}
            className="group cursor-pointer relative overflow-hidden"
          >
            <ElectricBorder
              color="#9fa7aa"
              speed={0.9}
              chaos={0.7}
              thickness={2}
              className="w-full h-full"
            >
              <div className="p-6 bg-transparent rounded-lg h-full flex flex-col transition-all duration-500 group-hover:scale-105">
                <div className="mb-5 overflow-hidden rounded-lg">
                  <img 
                    src={project.image1} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full transition-all duration-300 hover:bg-gray-500 hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.source_code_link && (
                    <a 
                      href={project.source_code_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo_link && (
                    <a 
                      href={project.demo_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </ElectricBorder>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;