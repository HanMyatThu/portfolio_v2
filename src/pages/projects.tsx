import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  details: string;
  link?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Photo51",
    description: "Molecular biology analysis software.",
    details:
      "Developed a web-based application for analyzing molecular biology data, featuring advanced visualization tools and collaborative capabilities.",
    tech: ["React", "TypeScript", "Node.js", "PHP/Laravel", "Electron", "AWS", "Docker", "StoryBook"],
    link: "#",
  },
  {
    title: "Spreadsheet Web App",
    description: "Excel-like app with dynamic formulas.",
    details:
      "Built using FortuneSheet and React, this application supports real-time updates, formula parsing, and efficient state management for large datasets.",
    tech: ["React", "TypeScript", "FortuneSheet"],
    link: "#",
    demo: "#",
  },
  {
    title: "Cloud Platform",
    description: "Scalable AWS-based system.",
    details:
      "Designed a cloud architecture with load balancing, auto-scaling, and CI/CD pipelines to handle high traffic efficiently.",
    tech: ["AWS", "Docker", "Node.js"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() => setSelected(project)}
            className="glass p-6 rounded-2xl neon cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-white/10 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="glass neon max-w-2xl w-full p-8 rounded-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">
                {selected.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {selected.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selected.link && (
                  <button className="px-5 py-2 rounded-full bg-cyan-700 hover:bg-cyan-600 transition">
                    <a href={selected.link} className="text-blue-400">
                      Demo / Link
                    </a>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}