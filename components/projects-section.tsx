"use client"

import { ExternalLink, Github, Shield, Cloud, Terminal, Bot, GraduationCap, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "CyberIntel.AI",
    subtitle: "ML-Powered Threat Detection",
    description:
      "Built an ML-based real-time threat detection system with 95% detection accuracy. Implemented multi-module detection to expand coverage across various threat vectors.",
    problem: "Organizations struggle with detecting sophisticated cyber threats in real-time.",
    impact: "Achieved 95% detection accuracy and reduced false positives by 40%.",
    tech: ["React", "TypeScript", "Firebase", "Python", "ML"],
    icon: Shield,
    category: "Security",
    github: "https://github.com/vannoorsab/CyberIntel.AI",
    featured: true,
  },
  {
    title: "SITA",
    subtitle: "Security Incident Triage Agent",
    description:
      "Developed a cloud-native security system for high-volume log ingestion and analysis. Designed scalable pipeline for automated detection.",
    problem: "Security teams spend excessive time manually investigating incidents.",
    impact: "Automated incident triage, reducing manual investigation time by 70%.",
    tech: ["Cloud Run", "Pub/Sub", "MongoDB", "Gemini", "ADK"],
    icon: Cloud,
    category: "Cloud",
    github: "https://github.com/vannoorsab/SITA",
    featured: true,
  },
  {
    title: "AI Career Advisor India",
    subtitle: "AI-Powered Career Guidance Platform",
    description:
      "Comprehensive AI career guidance platform for Indian job market with personalized recommendations, skill-based matching, and learning roadmaps.",
    problem: "Professionals struggle to navigate career paths in the rapidly evolving Indian job market.",
    impact: "Provides personalized AI-generated learning paths with Firebase auth and offline support.",
    tech: ["React", "TypeScript", "Firebase", "Gemini AI", "Vertex AI", "TanStack Query"],
    icon: Bot,
    category: "AI",
    github: "https://github.com/vannoorsab/Ai-Advisor",
    featured: true,
  },
  {
    title: "VidyaAI",
    subtitle: "AI Education Platform",
    description:
      "AI-powered educational platform designed to enhance learning experiences with intelligent tutoring and personalized content.",
    problem: "Students need personalized learning assistance available 24/7.",
    impact: "Delivers adaptive learning experiences using advanced AI models.",
    tech: ["React", "TypeScript", "AI/ML", "Node.js"],
    icon: GraduationCap,
    category: "AI",
    github: "https://github.com/vannoorsab/VidyaAi-Trae",
    featured: true,
  },
]

const categories = ["All", "Security", "Cloud", "AI"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">03.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-6">
              <span className="text-primary">$</span> ls -la ./projects/
            </h2>
            
            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap font-mono">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded text-sm transition-all border",
                    activeCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                  )}
                >
                  {category === "All" ? "*" : ""}{category.toLowerCase()}/
                </button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="grid gap-6">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">
                    ~/projects/{project.title.toLowerCase().replace(/\./g, '-').replace(/\s+/g, '-')}/
                  </span>
                  <span className="ml-auto text-xs text-primary/60 font-mono">[{String(index + 1).padStart(2, '0')}]</span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                        <project.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground font-mono">{project.title}</h3>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded font-mono">
                          {project.subtitle}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-3 mb-5">
                        <div className="p-3 bg-background rounded border border-border/50">
                          <p className="text-[10px] text-primary font-mono mb-1 uppercase">// Problem</p>
                          <p className="text-xs text-muted-foreground">{project.problem}</p>
                        </div>
                        <div className="p-3 bg-background rounded border border-border/50">
                          <p className="text-[10px] text-primary font-mono mb-1 uppercase">// Impact</p>
                          <p className="text-xs text-muted-foreground">{project.impact}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/50 text-muted-foreground text-xs rounded font-mono border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Button asChild variant="outline" size="sm" className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent">
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          git clone
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent">
              <Link href="https://github.com/vannoorsab?tab=repositories">
                <Github className="mr-2 h-4 w-4" />
                View All Repositories
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
