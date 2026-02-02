"use client"

import { ExternalLink, Code, Users, Cloud } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "Java Developer Intern",
    company: "CSEdge",
    location: "Remote",
    period: "Sep 2024 - Nov 2024",
    type: "INTERN",
    icon: Code,
    description: [
      "Optimized Java backend components for modularity and performance",
      "Collaborated in Agile teams to deliver scalable features",
      "Contributed to code reviews, testing, bug fixing, and deployments",
    ],
    link: null,
  },
  {
    title: "Cloud & Certifications Lead",
    company: "GDG on Campus RGMCET",
    location: "Nandyal, India",
    period: "Sep 2024 - Present",
    type: "LEAD",
    icon: Cloud,
    description: [
      "Lead cloud technology initiatives for 500+ students",
      "Organize GenAI Study Jams and cloud workshops with Google",
      "Mentor students in obtaining Google Cloud certifications",
    ],
    link: "https://gdg.community.dev/",
  },
  {
    title: "Google Cloud Innovator",
    company: "Google Cloud",
    location: "Global",
    period: "May 2024 - Present",
    type: "PROGRAM",
    icon: Cloud,
    description: [
      "Selected member of global Google Cloud Innovators community",
      "Leverage cutting-edge cloud technologies for solutions",
      "Completed 10+ Google Cloud skill badges and certifications",
    ],
    link: "https://cloud.google.com/innovators",
  },
  {
    title: "Campus Ambassador",
    company: "MyGov India",
    location: "India",
    period: "Jul 2024 - Present",
    type: "AMBASSADOR",
    icon: Users,
    description: [
      "Represent MyGov India initiatives on campus",
      "Organize awareness campaigns for digital governance",
      "Bridge communication between students and government",
    ],
    link: "https://www.mygov.in/",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">04.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">$</span> git log --oneline
            </h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">
                    commit #{String(index + 1).padStart(2, '0')} - {exp.company.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                  <span className="ml-auto px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded font-mono">
                    {exp.type}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground font-mono">{exp.title}</h3>
                          <p className="text-primary text-sm font-mono">{exp.company}</p>
                        </div>
                        <div className="text-xs text-muted-foreground md:text-right font-mono">
                          <p className="text-primary/80">{exp.period}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mb-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2 font-mono">
                            <span className="text-primary flex-shrink-0">{">"}</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.link && (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                        >
                          view_more
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
