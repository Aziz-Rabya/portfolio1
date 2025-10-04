import React from "react";
import MagicBento from './MagicBento';

const About = () => {
  return (
    <section className="flex flex-col gap-10 m-4 p-3">
      <div>
        <h4 className="text-gray-400">Introduction</h4>
        <h1 className="text-white text-5xl font-extrabold">OVERVIEW.</h1>
        <p className="text-white max-w-3xl text-2xl leading-7 aguafina-script-regular">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </div>
      <div>
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
      </div>
    </section>
  );
};

export default About;
