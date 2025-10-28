"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Startup Inc.",
      period: "2025 - Present",
      description:
        "Frontend Developer AR (Swift) PTV — 2025 – Present Building and maintaining responsive, high-performing web applications with Next.js, React, and Tailwind CSS. Focused on smooth API integration, performance optimization, and modern UI design. ",
      achievements: [
        "Developed and deployed a responsive dashboard improving user workflow efficiency.",
        "Integrated multiple REST APIs and optimized data fetching for faster load times.",
        "Collaborated with backend teams to enhance app scalability and consistency.",
        "Improved UI/UX, leading to a better overall user experience.",
      ],
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={containerVariants} className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>

                {/* Content */}
                <div className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Briefcase size={24} className="text-primary" />
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
