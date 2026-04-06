import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

import Scene from "./sd-scene";

export default function Hero() {

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el && (window as any).lenis) {
      (window as any).lenis.scrollTo(el);
    } else {
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Scene />
      </div>

      {/* content */}
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* information */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-400 mb-4"
            >
              👋 Hello, I’m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Han <br />
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'AI Enthusiast',
                  1000,
                ]}
                wrapper="span"
                className="gradient-text"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-gray-400 max-w-xl"
            >
              I design and build high-performance web/mobile/desktop applications with
              exceptional user experience. Specialized in React, Next, TypeScript, Node, PHP
              and scalable system architecture. I am slowly transitioning into AI/ML and exploring the possibilities of generative AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 mt-8"
            >
              <button
                className="px-6 py-3 rounded-xl glass neon"
                onClick={() => scrollToSection('projects')}
              >
                  View Projects
              </button>

              <button
                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* glow */}
              <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-30 rounded-full" />

              {/* avatar */}
              <img
                src="/profile.jpg"
                alt="avatar"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border border-white/20 shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}