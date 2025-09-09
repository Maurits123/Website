'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getProfile, Profile } from '@/lib/data'

export default function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    getProfile().then(setProfile)
  }, [])

  if (!profile) {
    return (
      <section className="section-padding bg-gradient-to-br from-burnt-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-max">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Hi, I&apos;m{' '}
              <span className="text-burnt-orange-600 dark:text-burnt-orange-400">
                {profile.name}
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {profile.tagline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto"
            >
              {profile.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/projects"
                className="btn-primary text-lg px-8 py-3"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-lg px-8 py-3"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
