"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "E-Commerce API",
      description:
        "A scalable REST API for an e-commerce platform with payment integration, inventory management, and real-time order tracking.",
      tech: ["Node.js", "Express", "MongoDB", "Stripe", "Redis"],
      image: "/ecommerce-api-dashboard.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A WebSocket-based chat application with user authentication, message history, and real-time notifications.",
      tech: ["Node.js", "Socket.io", "PostgreSQL", "JWT", "Redis"],
      image: "/chat-application-interface.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Microservices Architecture",
      description:
        "A distributed system with multiple microservices for user management, product catalog, and order processing.",
      tech: ["Node.js", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
      image: "/microservices-architecture-diagram.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A real-time analytics dashboard that processes and visualizes large datasets with WebSocket updates.",
      tech: ["Node.js", "Express", "MongoDB", "WebSocket", "D3.js"],
      image: "/analytics-dashboard-charts.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "API Gateway",
      description:
        "A centralized API gateway with rate limiting, authentication, and request routing for microservices.",
      tech: ["Node.js", "Express", "JWT", "Redis", "Docker"],
      image: "/api-gateway-architecture.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Data Pipeline",
      description:
        "An ETL pipeline that processes, transforms, and loads data from multiple sources into a data warehouse.",
      tech: ["Node.js", "PostgreSQL", "Apache Kafka", "Docker", "AWS"],
      image: "/data-pipeline-flow.jpg",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of projects showcasing my expertise in backend development and system design
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full rounded-xl bg-background border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <Github size={16} /> GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
