"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  icon: React.ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative flex flex-col items-center space-y-4">
          <div className="w-12 h-12 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <div className="text-center font-medium text-sm">{name}</div>
        </div>
      </div>
    </motion.div>
  )
}
