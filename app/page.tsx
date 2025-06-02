import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Software Designer & Creative Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shieryl!
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                asChild
              >
                <Link href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                asChild
              >
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/shieryl-ryle" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/shieryltendilla//" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://mail.google.com/tendillashieryle">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a software designer and developer driven by curiosity, passion, and purpose. I enjoy turning ideas
                  into clean, functional, and user-friendly products and I'm always looking to learn and improve along
                  the way!
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started inside the 4 walls of Pamantasan ng Lungsod ng Maynila. I've worked with
                  various projects to create intuitive, performant, and accessible digital experiences.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  On top of coding, I have experience in UI/UX design and project management too ^^
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Shiery Tendilla</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">tendillashieryle@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Manila, Philippines</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Laravel" icon={<span className="text-yellow-400">🔥</span>} />
            <SkillBadge name="JavaScript" icon={<span className="text-yellow-400">🟨</span>} />
            <SkillBadge name="Python" icon={<span className="text-blue-500">🐍</span>} />
            <SkillBadge name="C" icon={<span className="text-blue-500">🟦</span>} />
            <SkillBadge name="C++" icon={<span className="text-blue-500">➕➕</span>} />
            <SkillBadge name="Flutter" icon={<span className="text-blue-500">📱</span>} />
            <SkillBadge name="Flutterflow" icon={<span className="text-blue-500">⚙️</span>} />
            <SkillBadge name="React JS" icon={<span className="text-cyan-400">⚛️</span>} />
            <SkillBadge name="Livewire" icon={<span className="text-white">▲</span>} />
            <SkillBadge name="HTML/CSS 3" icon={<span className="text-orange-500">🌐</span>} />
            <SkillBadge name="Tailwind CSS" icon={<span className="text-cyan-400">💨</span>} />
            <SkillBadge name="PHP" icon={<span className="text-blue-600">🐘</span>} />
            <SkillBadge name="MySQL" icon={<span className="text-yellow-400">🐬</span>} />
            <SkillBadge name="AWS" icon={<span className="text-orange-400">☁️</span>} />
            <SkillBadge name="Docker" icon={<span className="text-blue-400">🐳</span>} />
            <SkillBadge name="Git" icon={<span className="text-orange-600">🔀</span>} />
            <SkillBadge name="Blender" icon={<span className="text-blue-500">🟠</span>} />
            <SkillBadge name="Figma" icon={<span className="text-blue-500">🖼️</span>} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform built with Next.js, Stripe, and Prisma."
              tags={["Next.js", "TypeScript", "Prisma", "Stripe"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="A comprehensive e-commerce solution that provides businesses with a modern, responsive online store. Features include product management, shopping cart functionality, secure checkout with Stripe, and order management."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "Responsive product catalog with filtering and search",
                "User authentication and account management",
                "Shopping cart with persistent storage",
                "Secure payment processing with Stripe",
                "Order tracking and history",
                "Admin dashboard for inventory management",
              ]}
              technologies={[
                "Next.js",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "Stripe API",
                "Tailwind CSS",
                "NextAuth.js",
              ]}
              challenges="One of the main challenges was implementing a seamless checkout experience while ensuring security and performance. We solved this by optimizing the Stripe integration and implementing server-side rendering for critical pages."
              outcome="The platform has successfully processed over 1,000 orders with a 99.8% uptime since launch. Customer feedback has been overwhelmingly positive, particularly regarding the intuitive interface and smooth checkout process."
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates."
              tags={["React", "Firebase", "Tailwind CSS", "Redux"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="A powerful task management application designed for teams to collaborate efficiently. The app features real-time updates, task assignment, progress tracking, and deadline management."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "Real-time collaboration with Firebase",
                "Drag-and-drop task organization",
                "Task assignment and delegation",
                "Progress tracking and reporting",
                "Deadline notifications and reminders",
                "Team chat and commenting system",
              ]}
              technologies={[
                "React",
                "Firebase Realtime Database",
                "Firebase Authentication",
                "Redux",
                "Tailwind CSS",
                "React DnD",
              ]}
              challenges="Implementing real-time synchronization across multiple users while maintaining performance was challenging. We utilized Firebase's efficient data structure and optimized React rendering to ensure a smooth experience."
              outcome="The application has been adopted by several teams, resulting in a reported 30% increase in productivity and improved project completion rates."
            />
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered content generation tool using OpenAI's GPT models."
              tags={["Next.js", "OpenAI API", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="An innovative content generation platform that leverages OpenAI's GPT models to help users create high-quality articles, marketing copy, and social media posts with minimal input."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "AI-powered content generation",
                "Multiple content formats (articles, social posts, emails)",
                "Content editing and refinement tools",
                "SEO optimization suggestions",
                "Content history and management",
                "Export to various formats",
              ]}
              technologies={["Next.js", "OpenAI API", "Node.js", "MongoDB", "Express", "JWT Authentication"]}
              challenges="Balancing API costs with user experience was a significant challenge. We implemented intelligent caching and request optimization to reduce API calls while maintaining quality output."
              outcome="The tool has helped content creators reduce content production time by up to 60% while maintaining high-quality standards."
            />
            <ProjectCard
              title="Fitness Tracker"
              description="A mobile-first fitness tracking application with data visualization."
              tags={["React Native", "TypeScript", "D3.js", "Firebase"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="A comprehensive fitness tracking application that helps users monitor workouts, track progress, and visualize fitness data. The app includes workout planning, progress tracking, and personalized recommendations."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "Workout tracking and planning",
                "Progress visualization with interactive charts",
                "Personalized workout recommendations",
                "Integration with health devices",
                "Social sharing and community features",
                "Nutrition tracking and meal planning",
              ]}
              technologies={["React Native", "TypeScript", "D3.js", "Firebase", "Redux", "Health Kit API"]}
              challenges="Creating intuitive data visualizations that work well on mobile devices was challenging. We used D3.js with custom optimizations to ensure smooth performance across different screen sizes."
              outcome="The app has gained over 10,000 active users with a 4.7-star rating on app stores. Users particularly appreciate the intuitive interface and helpful progress visualizations."
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A beautiful weather dashboard with forecasts and historical data."
              tags={["React", "Weather API", "Chart.js", "Styled Components"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="An elegant weather dashboard that provides current conditions, forecasts, and historical weather data with beautiful visualizations. The app includes location-based weather, interactive maps, and severe weather alerts."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "Real-time weather conditions",
                "7-day forecast with detailed information",
                "Historical weather data analysis",
                "Interactive weather maps",
                "Severe weather alerts",
                "Location-based weather tracking",
              ]}
              technologies={["React", "Weather API", "Chart.js", "Styled Components", "Mapbox", "Progressive Web App"]}
              challenges="Handling and visualizing large amounts of weather data efficiently was a challenge. We implemented data aggregation techniques and optimized rendering to ensure smooth performance."
              outcome="The dashboard has become a popular tool for weather enthusiasts and professionals, with users praising its accuracy and beautiful visualizations."
            />
            <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
              longDescription="A modern, responsive portfolio website showcasing my projects, skills, and experience. The site features smooth animations, interactive elements, and a clean, professional design."
              gallery={[
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
                "/placeholder.svg?height=400&width=600",
              ]}
              features={[
                "Responsive design for all devices",
                "Smooth page transitions and animations",
                "Interactive project showcases",
                "Dark mode support",
                "Contact form with validation",
                "Performance optimized loading",
              ]}
              technologies={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "React Hooks",
                "Vercel Deployment",
              ]}
              challenges="Creating smooth animations while maintaining performance was challenging. Framer Motion helped solve this by providing efficient animation capabilities that work well with React's rendering cycle."
              outcome="The portfolio has effectively showcased my work and skills, leading to new opportunities and collaborations with clients and other developers."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">hello@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/shinekyawkyawaung</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/shinekyawkyawaung</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Shine</span>
              <span className="text-white">KKA</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Shine Kyaw Kyaw Aung. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
