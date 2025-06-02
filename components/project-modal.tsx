"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    tags: string[]
    image: string
    longDescription?: string
    gallery?: string[]
    features?: string[]
    technologies?: string[]
    challenges?: string
    outcome?: string
  }
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState<string>(project.image)

  // Update active image when project changes
  useEffect(() => {
    if (project) {
      setActiveImage(project.image)
    }
  }, [project])

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-zinc-900 border border-zinc-700/50 shadow-2xl"
          >
            <div className="absolute top-4 right-4 z-20">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-50 z-10"></div>
              <img src={activeImage || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-900 to-transparent">
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-zinc-700/80 hover:bg-zinc-700 text-zinc-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Gallery</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div
                      className={`aspect-video rounded-md overflow-hidden cursor-pointer border-2 ${
                        activeImage === project.image ? "border-purple-500" : "border-transparent"
                      }`}
                      onClick={() => setActiveImage(project.image)}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt="Main"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        className={`aspect-video rounded-md overflow-hidden cursor-pointer border-2 ${
                          activeImage === img ? "border-purple-500" : "border-transparent"
                        }`}
                        onClick={() => setActiveImage(img)}
                      >
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Overview</h3>
                  <p className="text-zinc-300">{project.longDescription || project.description}</p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {project.challenges && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Challenges & Solutions</h3>
                    <p className="text-zinc-300">{project.challenges}</p>
                  </div>
                )}

                {project.outcome && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Outcome</h3>
                    <p className="text-zinc-300">{project.outcome}</p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end">
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
