'use client'

import { useState } from 'react'
import { ExternalLink, Eye, X } from 'lucide-react'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [previewMedia, setPreviewMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null)

  const isMediaFile = (url: string): { isMedia: boolean; type: 'image' | 'video' | null } => {
    if (!url) return { isMedia: false, type: null }
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.MOV', '.avi', '.AVI']
    
    const lowerUrl = url.toLowerCase()
    const isImage = imageExtensions.some(ext => lowerUrl.includes(ext.toLowerCase()))
    const isVideo = videoExtensions.some(ext => url.includes(ext))
    
    if (isImage) return { isMedia: true, type: 'image' }
    if (isVideo) return { isMedia: true, type: 'video' }
    return { isMedia: false, type: null }
  }

  const handlePreview = (url: string) => {
    if (!url) return
    
    const mediaCheck = isMediaFile(url)
    if (mediaCheck.isMedia && mediaCheck.type) {
      setPreviewMedia({ url, type: mediaCheck.type })
    } else {
      // Open URL in new tab
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const filteredProjects =
    activeFilter === 'all' ? data.projects : data.projects.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="aspect-[4/3] overflow-hidden bg-background">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>

              {/* Action Buttons */}
              <div className="flex gap-2 md:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.liveUrl && (
                  <button
                    onClick={() => handlePreview(project.liveUrl)}
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Preview
                  </button>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Visit
                  </a>
                )}
              </div>
            </div>

            {/* Category Badge - Always visible */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-accent capitalize">
              {project.category}
            </div>
          </div>
        ))}
      </div>

      {/* Media Preview Modal */}
      {previewMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setPreviewMedia(null)}
        >
          <button
            onClick={() => setPreviewMedia(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-accent text-foreground hover:text-accent-foreground transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="max-w-7xl w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {previewMedia.type === 'image' ? (
              <img
                src={previewMedia.url}
                alt="Preview"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={previewMedia.url}
                controls
                className="max-w-full max-h-[90vh] rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
