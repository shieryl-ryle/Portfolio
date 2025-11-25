'use client'

import { useState } from 'react'
import { PenTool, Code, Smartphone, Zap, X } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ name: string; text: string } | null>(null)

  const truncateText = (text: string, maxLength: number = 120): string => {
    if (typeof text !== 'string' || text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  const openTestimonial = (testimonial: { name: string; text: string }): void => {
    setSelectedTestimonial(testimonial)
  }

  const closeTestimonial = (): void => {
    setSelectedTestimonial(null)
  }
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Testimonials with Marquee Animation and Scrollable */}
      {data.testimonials && data.testimonials.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Testimonials</h3>
          <div className="relative">
            <div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-thin" style={{ scrollbarColor: 'var(--accent) transparent' }}>
              <div className="flex gap-3 md:gap-4 animate-marquee min-w-max">
                {[...data.testimonials, ...data.testimonials].map((testimonial, index) => {
                  const isTruncated = testimonial.text.length > 120
                  const truncatedText = truncateText(testimonial.text)
                  
                  return (
                    <div key={index} className="flex-shrink-0 w-72 md:w-80 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border flex flex-col">
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                        {truncatedText}
                      </p>
                      {isTruncated && (
                        <button
                          onClick={() => openTestimonial(testimonial)}
                          className="text-xs md:text-sm text-accent hover:underline font-medium text-left mt-auto"
                        >
                          Read More
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeTestimonial}
        >
          <div
            className="relative bg-card rounded-xl md:rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeTestimonial}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 pr-8">
              {selectedTestimonial.name}
            </h4>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {selectedTestimonial.text}
            </p>
          </div>
        </div>
      )}

      {/* Companies with Marquee Animation */}
      {data.companies && data.companies.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Companies</h3>
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-4 md:gap-6 animate-marquee-slow min-w-max">
              {[...data.companies, ...data.companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-secondary rounded-xl md:rounded-2xl border border-border flex items-center justify-center p-4 md:p-6 hover:border-accent transition-colors"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
