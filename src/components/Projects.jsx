import ElectricBorder from "./ElectricBorder";
import { ProjectsList } from "../../constants";
import { useRef, useEffect, useState, useCallback } from 'react';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      className="flex flex-col gap-10 m-4 p-3 mb-20"
      id="projects"
    >
      <div>
        <h4 className="text-gray-400">
          Featured
        </h4>
        <h1 className="text-white text-5xl font-extrabold">
          PROJECTS.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsList.map((project, index) => (
          <div
            key={index}
            className="group cursor-pointer relative overflow-hidden"
          >
            <ElectricBorder
              color="#9fa7aa"
              speed={0.9}
              chaos={0.7}
              thickness={2}
              className="w-full h-full"
            >
              <div className="p-6 bg-transparent rounded-lg h-full flex flex-col">
                <div className="mb-5 overflow-hidden rounded-lg">
                  <img 
                    src={project.image1} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
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
                      className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.source_code_link && (
                    <a 
                      href={project.source_code_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white text-white py-2 px-4 rounded-lg font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo_link && (
                    <a 
                      href={project.demo_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-transparent border border-white text-white py-2 px-4 rounded-lg font-medium"
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