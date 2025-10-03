'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getProfile, Profile } from '@/lib/data'

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfile().then(setProfile)
  }, [])

  if (!profile) {
    return (
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>
                <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full"></div>
              </div>
            </div>
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {profile.bio}
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate software engineer with expertise in full-stack development, cloud technologies, 
                and modern web frameworks. My experience spans from frontend development with React and Vue.js 
                to backend services using Node.js, Python, and cloud platforms like AWS and Azure.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Frontend Development (React, Vue.js, TypeScript)</li>
                  <li>• Backend Development (Node.js, Python, Express)</li>
                  <li>• Cloud Platforms (AWS, Azure, Google Cloud)</li>
                  <li>• Database Management (PostgreSQL, MongoDB, Redis)</li>
                  <li>• DevOps & CI/CD (Docker, Kubernetes, GitHub Actions)</li>
                  <li>• Mobile Development (React Native, Flutter)</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div>
                    <p className="font-medium">Bachelor of Science</p>
                    <p>Computer Science</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2020-2024</p>
                  </div>
                  <div>
                    <p className="font-medium">Certifications</p>
                    <p>AWS Solutions Architect, Google Cloud Professional</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023-2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <a
                href="/Maurits Deman Resume.pdf"
                download
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Download My Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
