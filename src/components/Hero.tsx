"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles container loaded:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#293351", // Matches your design
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false }, 
          onHover: { enable: true , mode: "repulse"}, 
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 2, // Smooth, slow particle motion
          straight: false,
        },
        number: {
          value: 150, // Total number of particles
          density: { enable: true, area: 800 },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true, // High resolution
    }),
    []
  );

  return (
    <div className="relative min-h-screen pt-20 flex flex-col">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -10, 0], // Floating effect
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <h1 className="text-white font-['Bebas_Neue'] text-4xl md:text-6xl lg:text-8xl leading-tight select-none">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block hover:text-[#E5C07B] transition-colors duration-300 hover:scale-110"
            >
              LESS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block hover:text-[#E5C07B] transition-colors duration-300 hover:scale-110"
            >
              ARTIFICIAL,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block hover:text-[#E5C07B] transition-colors duration-300 hover:scale-110"
            >
              MORE
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block hover:text-[#E5C07B] transition-colors duration-300 hover:scale-110"
            >
              INTELLIGENT.
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;