import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "PHP/Laravel",
  "Golang",
  "Express",
  "NestJS",
  "AWS",
  "Azure",
  "Tailwind",
  "Docker",
  "Redis",
  "GraphQL",
  "MySQL",
  "MongoDB",
  "Jest",
  "Playwright",
  "StoryBook",

];

export default function Skills() {
  return (
    <section className="py-32 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="glass neon px-5 py-3 rounded-xl text-sm"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}