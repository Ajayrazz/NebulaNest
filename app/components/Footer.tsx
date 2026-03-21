"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTerminal } from 'react-icons/fa'

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear()


  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "https://github.com/Ajayrazz", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/ajay-razz/", label: "LinkedIn" },
    { icon: <FaTwitter size={20} />, href: "https://x.com/AjayRaz18514034", label: "Twitter" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/ajaypratap____/", label: "Instagram" }
  ]

  return (
    <footer className={`w-full py-12 mt-20 relative z-10 bg-transparent ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl flex flex-col items-center">


        {/* Separator */}
        <motion.div
          className="w-full border-t border-dashed border-gray-700/60 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section (Copyright & Socials) */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-textLight/70 text-sm md:text-sm text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Ajay Razz. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-textLight/70 flex items-center justify-center hover:text-accent hover:-translate-y-1 transform transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </footer>
  )
}

export default Footer