import GradientBlinds from "./GradientBlinds";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div className="w-full h-screen relative top-0 left-0 overflow-hidden">
      {/* Gradient Background - fills entire screen */}
      <div className="relative w-full h-screen">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={10}
          noise={0.5}
          blindCount={17}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Hero content - positioned above gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4">
          Crafting the Web, One Pixel at a Time
        </h1>
        <p className="text-xl">
          Hi, I’m Aziz — a junior front-end developer passionate about building
          smooth, responsive, and user-friendly websites.
        </p>
        <button className="bg-white m-4 py-2 px-4 mt-5 text-violet-700 font-semibold rounded-full ">Projects</button>
        <button className="bg-white m-4 py-2 px-4 mt-4 text-violet-700 font-semibold rounded-full ">Contact</button>
      </div>

      {/* Navigation - positioned on top of everything */}
      <Nav />
    </div>
  );
};

export default Hero;
