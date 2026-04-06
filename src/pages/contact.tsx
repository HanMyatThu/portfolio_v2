import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Let's Work Together
      </motion.h2>

      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        I'm open to freelance work, full-time roles, and collaborations.
        Feel free to reach out if you want to build something amazing.
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <span className="text-gray-300">📧 hanmyatthu111@gmail.com</span>
        <span 
          onClick={() => window.open('https://www.linkedin.com/in/han-myat-thu-879046182/')}
          className="text-gray-300"
        >
          💼 https://www.linkedin.com/in/han-myat-thu-879046182/
          </span>
      </div>

      <a
        href="mailto:hanmyatthu111@gmail.com"
        className="glass neon px-8 py-4 rounded-xl inline-block"
      >
        Send Message
      </a>
    </section>
  );
}