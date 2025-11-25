'use client'

import { useState } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { CertificationsSection } from '@/components/certifications-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  certificationsData,
  blogData,
  contactData,
} from '@/lib/portfolio-data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          {/* Main Content */}
          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            {/* Navigation */}
            <nav className="p-3 sm:p-4 md:p-6 border-b border-border">
              {/* Mobile Layout - 2 Row Grid */}
              <div className="grid grid-cols-3 gap-1 sm:gap-2 md:hidden">
                {[
                  { id: 'about', label: 'about' },
                  { id: 'resume', label: 'resume' },
                  { id: 'portfolio', label: 'portfolio' },
                  { id: 'certifications', label: 'certifications' },
                  { id: 'blog', label: 'blog' },
                  { id: 'contact', label: 'contact' },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors whitespace-nowrap ${
                      activeSection === section.id
                        ? 'text-foreground bg-accent/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Desktop Layout - Flex Row */}
              <div className="hidden md:flex gap-4 overflow-x-auto scrollbar-hide">
                {[
                  { id: 'about', label: 'about' },
                  { id: 'resume', label: 'resume' },
                  { id: 'portfolio', label: 'portfolio' },
                  { id: 'certifications', label: 'certifications & awards' },
                  { id: 'blog', label: 'blog' },
                  { id: 'contact', label: 'contact' },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors whitespace-nowrap flex-shrink-0 ${
                      activeSection === section.id
                        ? 'text-foreground bg-accent/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'portfolio' && <PortfolioSection data={portfolioData} />}
              {activeSection === 'certifications' && <CertificationsSection data={certificationsData} />}
              {activeSection === 'blog' && <BlogSection data={blogData} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
