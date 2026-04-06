import { motion } from "framer-motion";

import type { ExperienceItem } from "../types";

const jobs: ExperienceItem[] = [
  {
    role: "Frontend Engineer",
    company: "StudyPortals",
    year: "2024 - Present",
  },
  {
    role: "Full Stack Developer",
    company: "FPT Software",
    year: "2022 - 2024",
  },
  {
    role: "Software Developer",
    company: "Tech Startup",
    year: "2020 - 2022",
  },
];

export default function Experience() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto relative">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-20 text-center"
      >
        Experience
      </motion.h2>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30" />

      <div className="flex flex-col gap-16">
        {jobs.map((job, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%] glass p-6 rounded-2xl neon">
                <h3 className="text-xl font-semibold">
                  {job.role}
                </h3>

                <p className="text-gray-400 mt-1">
                  {job.company}
                </p>

                <span className="text-sm text-gray-500">
                  {job.year}
                </span>

                {/* subtle gradient line */}
                <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}