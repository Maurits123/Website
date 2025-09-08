'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getProfile, Profile } from '@/lib/data'

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfile().then(setProfile)
  }, [])

  if (!profile) {
    return (
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {profile.bio}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm passionate about creating innovative hardware solutions that push the boundaries of embedded systems and digital design. 
              My expertise spans FPGA development, custom PCB design, and embedded software development, 
              with a strong focus on high-performance computing and real-time signal processing applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-primary"
              >
                Learn More
              </Link>
              <a
                href="/Maurits Deman Resume.pdf"
                download
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">MD</div>
                <div className="text-xl font-medium">Hardware Engineer</div>
                <div className="text-sm opacity-90">FPGA & Embedded Systems</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
