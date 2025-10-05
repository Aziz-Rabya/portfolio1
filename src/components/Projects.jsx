import ElectricBorder from "./ElectricBorder";
import { ProjectsList } from "../../constants";

const Projects = () => {
  return (
    <section className="flex flex-col gap-10 m-4 p-3">
      <div>
        <h4 className="text-gray-400">Introduction</h4>
        <h1 className="text-white text-5xl font-extrabold">OVERVIEW.</h1>
      </div>
      
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsList.map((project, index) => (
          <div 
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <ElectricBorder
              color="#9fa7aa"
              speed={1}
              chaos={0.5}
              thickness={2}
              className="w-full"
            >
              <div className="p-4 bg-transparent rounded-lg h-full flex flex-col transition-all duration-300 group-hover:bg-gray-800/30">
                {/* Single Project Image */}
                <div className="mb-4">
                  <img 
                    src={project.image1} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
                  />
                </div>
                
                {/* Project Title */}
                <h3 className="text-white text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-400">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-300 mb-4 flex-grow transition-all duration-300 group-hover:text-gray-200">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links - Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.source_code_link && (
                    <a 
                      href={project.source_code_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo_link && (
                    <a 
                      href={project.demo_link}
                      className="flex items-center justify-center gap-2 flex-1 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
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