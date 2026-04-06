import { motion } from "framer-motion";

import type { ExperienceItem } from "../types";

const myexperiences: ExperienceItem[] = [
  {
    role: "Frontend Developer (Start Up Environment)",
    company: "Fearless League Co., Ltd.",
    year: "Feb 2025 - Present",
    desc: [
       "Developed Photo51, a molecular biology analysis software, working in a small agile team to deliver new features, optimize performance, and ensure a seamless user experience for scientists worldwide.",
       "Developed Spark, an Electronic Lab Notebook (ELN) project by developing frontend features, including AI-assisted tools, real-time collaboration, and advanced data handling capabilities such as spreadsheet-like functionality.",
       "Contributed to product design decisions in a startup environment, ensuring alignment with business goals."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "ExxonMobil Co., Ltd, Bangkok Branch",
    year: "Jan 2023 - July 2024",
    desc: [
      "Developed two in-house web applications with React, NextJs, NodeJs, TypeScript, TailWind CSS, ShadCn UI, React-Query, .Net, SQL database and more. ",
      "Collaborated with cross-functional teams (PO, BA, QA) to translate complex business requirements into scalable technical solutions, reducing feature delivery time.",
      "Unit testing with Jest, React Testing Library and Automate testing with Playwright to maintain the code quality",
    ]
  },
  {
    role: "Frontend Developer",
    company: "Tata Consultancy Services (Thailand), Bangkok",
    year: "May 2021 - December 2022",
    desc: [
      "Worked at the client site, which is TTB Bank, one of the Bank in Thailand.",
      "Developed and maintained frontend features for a large-scale enterprise application used by TTB Bank, utilizing React, TypeScript, and Redux to enhance user experience and performance.",
      "Developed the Design System (Storybook), published to Nexus and used it as a library, to have a consistent UI and make sure to have reusable components  "
    ]
  },
  {
    role: "Software Developer",
    company: "Nuzay Co., Ltd",
    year: "June 2020 - April 2021",
    desc: [
      "Developed educational based software & hotel booking system software.",
    ]
  },
  {
    role: "Software Engineer",
    company: "Pleo Data Co., Ltd",
    year: "September 2019 - May 2020",
    desc: [
      "Developed dashboard applications for IoT based softwares, enabling real-time monitoring and management of connected systems.",
      "Built the RiceATM project in Myanmar during the COVID-19 pandemic, providing essential support to the community and helping distribute resources efficiently"
    ]
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
        {myexperiences.map((job, i) => {
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
                
                <p className="text-cyan-400 text-sm mt-1">
                  {job?.desc?.map((item, i) => (
                    <li key={i} className="list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </p>

                <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}