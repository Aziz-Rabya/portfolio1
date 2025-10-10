import Galaxy from "./Galaxy";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full h-screen relative top-0 left-0 overflow-hidden" id="home">
      <div
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
      </div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-4"
      >
        <h1 className="text-7xl font-bold mb-6 bbh-sans-bogle-regular">
          Crafting the Web, One Pixel at a Time
        </h1>

        <p className="text-xl mb-8 leading-relaxed font-serif">
          Hi, I'm Aziz — a junior front-end developer passionate about building
          smooth, responsive, and user-friendly websites.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-full font-semibold text-lg"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Hero;