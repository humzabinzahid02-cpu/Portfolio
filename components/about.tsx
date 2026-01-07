"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
  I’m a Frontend Developer who enjoys building clean, responsive, and intuitive user interfaces.
  I specialize in crafting modern web applications using React, Next.js, Tailwind CSS, and TypeScript.
  My focus is on creating smooth user experiences, writing maintainable code, and delivering
  visually polished products.
  <br /><br />
  I have hands-on experience working with APIs, optimizing UI performance, and translating
  designs into high-quality, production-ready interfaces. I’m always eager to learn,
  improve, and stay aligned with the latest trends in frontend development.
</p>


              {/* Skills Highlight */}
              <div className="pt-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js & Next.js Development", "Tailwind CSS", "TypeScript"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                {[
                  { year: "2025", title: "Frontend Developer", company: "AR (Swift Ltd)" },
                
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 pb-8 relative">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                      {index < 2 && <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent mt-2"></div>}
                    </div>
                    {/* Content */}
                    <div>
                      <p className="text-sm text-primary font-semibold">{item.year}</p>
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
