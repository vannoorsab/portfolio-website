"use client"

import { GraduationCap, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Cybersecurity",
    institution: "RGMCET",
    fullName: "Rajeev Gandhi Memorial College of Engineering & Technology",
    location: "Nandyal, AP",
    period: "Sep 2023 - Present",
    cgpa: "8.0",
    highlights: [
      "Specializing in Cybersecurity - ethical hacking & forensics",
      "Cloud & Certifications Lead at GDG on Campus",
      "Winner of 5/6 departmental coding contests",
    ],
    current: true,
  },
  {
    degree: "B.S. in Data Science & Applications",
    specialization: "Data Science",
    institution: "IIT Madras",
    fullName: "Indian Institute of Technology Madras",
    location: "Online",
    period: "Sep 2025 - Present",
    cgpa: "Foundation Level",
    highlights: [
      "Parallel degree from India's premier technical institution",
      "Statistics, Machine Learning, Data Engineering",
      "Complementing security with advanced analytics",
    ],
    current: true,
  },
]

const learningPaths = [
  {
    title: "Google Cloud",
    description: "Champion Milestone, 10+ badges",
    link: "https://www.cloudskillsboost.google/",
  },
  {
    title: "HackerRank",
    description: "5-star in Java, C, Problem Solving",
    link: "https://www.hackerrank.com/",
  },
  {
    title: "Kaggle",
    description: "P1 rank, active ML practitioner",
    link: "https://www.kaggle.com/vannoorsab",
  },
  {
    title: "edX",
    description: "Python & Java certificates",
    link: "https://www.edx.org/",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-card/30 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">06.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Education</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">$</span> cat education.json
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Education */}
            <div className="lg:col-span-2 space-y-4">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className="relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/80" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-4 text-xs text-muted-foreground font-mono">
                      ~/education/{edu.institution.toLowerCase()}/
                    </span>
                    {edu.current && (
                      <span className="ml-auto px-2 py-0.5 bg-primary/20 text-primary text-[10px] rounded font-mono">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground font-mono">{edu.degree}</h3>
                        <p className="text-primary text-sm font-mono mb-1">{edu.specialization}</p>
                        <p className="text-xs text-muted-foreground mb-3">{edu.fullName}</p>

                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 font-mono">
                          <span className="text-primary/80">{edu.period}</span>
                          <span>|</span>
                          <span>{edu.location}</span>
                          <span>|</span>
                          <span className="text-primary">CGPA: {edu.cgpa}</span>
                        </div>

                        <ul className="space-y-1.5">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex gap-2 font-mono">
                              <span className="text-primary flex-shrink-0">{">"}</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Paths Sidebar */}
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">~/learning/</span>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-foreground">continuous_learning</span>
                  </div>

                  <div className="space-y-2">
                    {learningPaths.map((path) => (
                      <Link
                        key={path.title}
                        href={path.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-3 rounded hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                            {path.title}
                          </h4>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 font-mono">{path.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="text-sm font-mono text-foreground mb-3">
                  <span className="text-primary">//</span> focus_areas
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Cybersecurity", "Data Science", "Cloud", "ML", "Full Stack", "DevOps"].map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 bg-secondary/50 text-muted-foreground text-xs rounded font-mono border border-border/50 hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
