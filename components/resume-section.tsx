import { BookOpen, Briefcase, Download } from 'lucide-react'
import { resumeData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Resume</h2>
          <a
            href="/Shieryl_Tendilla_CV.pdf"
            download="Shieryl_Tendilla_CV.pdf"
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 transition-all text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Download PDF
          </a>
        </div>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              {Array.isArray(item.description) ? (
                <div className="space-y-2">
                  {item.description.map((desc: string, idx: number) => (
                    <p key={idx} className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              {Array.isArray(item.description) ? (
                <div className="space-y-2">
                  {item.description.map((desc: string, idx: number) => (
                    <p key={idx} className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
