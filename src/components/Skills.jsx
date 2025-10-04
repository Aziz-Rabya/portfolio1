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

  return (
    <section className="flex flex-col mt-10 p-5">
        <div className="m-5 p-2">
            <h4 className="text-gray-400">Technologies and </h4>
            <h1 className="text-white text-5xl font-extrabold">SKILLS.</h1>
        </div>
      <div
        style={{
          height: "200px",
          position: "relative",
          overflow: "hidden",
          marginTop: "70px",
          backgroundColor: "#000000",
        }}
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
          fadeOutColor="#000000" // Changed to black to match container background
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Skills;
