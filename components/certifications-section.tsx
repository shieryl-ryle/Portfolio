import { Award, FileText } from 'lucide-react'

interface Certification {
  title: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
}

interface AwardItem {
  title: string
  issuer: string
  date: string
  description?: string
}

interface CertificationsData {
  certifications: Certification[]
  awards: AwardItem[]
}

interface CertificationsSectionProps {
  data?: CertificationsData
}

export function CertificationsSection({ data }: CertificationsSectionProps) {
  if (!data) return null

  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Certifications & Awards</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Certifications */}
      {data.certifications && data.certifications.length > 0 && (
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-6">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Certifications</h3>
          </div>
          <div className="space-y-4">
            {data.certifications.map((cert, index) => (
              <div
                key={index}
                className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {cert.title}
                        </a>
                      ) : (
                        cert.title
                      )}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-accent whitespace-nowrap">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {data.awards && data.awards.length > 0 && (
        <div>
          <div className="flex items-center gap-2 md:gap-3 mb-6">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Awards</h3>
          </div>
          <div className="space-y-4">
            {data.awards.map((award, index) => (
              <div
                key={index}
                className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                      {award.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{award.issuer}</p>
                    {award.description && (
                      <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                        {award.description}
                      </p>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-accent whitespace-nowrap">{award.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

