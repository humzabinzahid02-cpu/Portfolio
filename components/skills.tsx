"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Database, GitBranch, Cloud, Zap, Package } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const skills = [
  { icon: Code2, name: "React.js", color: "from-cyan-500 to-blue-500" },
  { icon: Code2, name: "Next.js", color: "from-gray-700 to-gray-900" },
  { icon: Zap, name: "TypeScript", color: "from-blue-500 to-indigo-500" },
  { icon: Package, name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
  { icon: GitBranch, name: "Git & GitHub", color: "from-orange-600 to-red-600" },
  { icon: Cloud, name: "Vercel Deployment", color: "from-purple-500 to-pink-500" },
  { icon: Database, name: "API Integration", color: "from-green-500 to-emerald-500" },
]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A focused set of technologies and tools I use to build modern, responsive, and high-performance frontend applications.

            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 h-full">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-center">{skill.name}</h3>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
