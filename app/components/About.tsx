"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaBrain, FaServer, FaMobileAlt } from 'react-icons/fa'

const skills = [
  { name: 'Data Structures & Algorithms', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 75 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'Git', level: 90 },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-text font-medium">{name}</span>
        <span className="text-accent font-medium">{level}%</span>
      </div>
      <div className="w-full bg-secondary/70 rounded-full h-2.5 backdrop-blur-sm">
        <motion.div
          className="bg-gradient-to-r from-accent to-[#4ECDC4] h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <motion.div
      className="bg-secondary/30 backdrop-blur-sm border border-accent/10 rounded-lg p-6 hover:bg-secondary/50 transition-all duration-300"
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(100, 255, 218, 0.1)' }}
    >
      <div className="text-accent mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl text-text font-bold mb-2">{title}</h3>
      <p className="text-textLight">{description}</p>
    </motion.div>
  )
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  }

  return (
    <section id="about" className="py-20 scroll-mt-20 relative">
      {/* Decorative element */}
      <div className="absolute right-0 top-20 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
      <div className="absolute left-10 bottom-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>

      {/* <div className="section-heading-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
      </div> */}

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-10"
        >
          <motion.p variants={itemVariants} className="text-textLight mb-6 text-lg">
            Hello! I'm <span className="text-accent font-medium">Ajay Razz</span>, a dedicated software engineer focused on architecting robust, scalable systems and highly intuitive user interfaces.
          </motion.p>

          <motion.p variants={itemVariants} className="text-textLight mb-6">
            My engineering approach replaces standard curiosity with rigorous, analytical problem-solving, transforming intricate technical requirements into seamless digital experiences.
          </motion.p>

          <motion.p variants={itemVariants} className="text-textLight mb-6">
            I prioritize writing clean, maintainable code while continuously adopting modern frameworks to optimize both backend performance and frontend accessibility. Ultimately, my core objective remains delivering premium, enduring products that directly elevate everyday interactions.
          </motion.p>

          <motion.p variants={itemVariants} className="text-textLight">
            Beyond active development, I dedicate time toward competitive programming, mastering artificial intelligence integrations, contributing to collaborative open-source projects, and actively empowering peers across the global developer community. Let us build something extraordinary together today.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            <FeatureCard
              icon={FaCode}
              title="FullStack Developer"
              description="Building scalable full-stack applications with modern technologies."
            />
            <FeatureCard
              icon={FaServer}
              title="Android Developer"
              description="Building fast, reliable Android apps with seamless user experiences."
            />
            <FeatureCard
              icon={FaBrain}
              title="iOS Developer"
              description="Building elegant, responsive iOS apps with intuitive design."
            />
            <FeatureCard
              icon={FaBrain}
              title="Problem Solving"
              description="Finding elegant solutions to complex challenges"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg blur-sm"></div>
          <div className="relative bg-secondary/70 backdrop-blur-sm p-8 rounded-lg border border-accent/10">
            <h3 className="text-2xl text-text font-bold mb-8 relative inline-block">
              My Skills
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 "></span>
            </h3>
            <div>
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 