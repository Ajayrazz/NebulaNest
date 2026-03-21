"use client"

import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to set initial scroll state
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8
        }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        className={`${scrolled ? 'bg-primary/40' : 'bg-primary/25'} 
          backdrop-blur-xl fixed right-4 sm:right-6 lg:right-8 top-4 z-50 w-fit py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-500
          ${hovering ? 'shadow-[0_15px_40px_-10px_rgba(100,255,218,0.4)]' : 'shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]'} 
          border border-accent/20 rounded-full floating-navbar translate-y-0
          hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 ease-in-out animate-float`}
      >
        <div className="flex justify-center items-center h-full">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4 sm:space-x-6"
          >
            {[
              { href: "https://github.com/Ajayrazz", icon: <FaGithub size={20} className="sm:text-xl" /> },
              { href: "https://www.linkedin.com/in/ajay-razz/", icon: <FaLinkedin size={20} className="sm:text-xl" /> },
              { href: "https://x.com/AjayRaz18514034", icon: <FaTwitter size={20} className="sm:text-xl" /> }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textLight hover:text-accent transition-colors duration-300"
                whileHover={{
                  y: -3,
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar