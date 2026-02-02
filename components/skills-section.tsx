"use client"

import { Code, Brain, Cloud, Globe, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "languages",
    icon: Code,
    cmd: "$ cat languages.txt",
    skills: ["Java", "Python", "C", "TypeScript", "JavaScript", "Shell", "HTML/CSS", "SQL"],
  },
  {
    title: "ai_ml",
    icon: Brain,
    cmd: "$ python train.py",
    skills: ["ML Pipelines", "Feature Engineering", "Supervised Learning", "Unsupervised Learning", "GenAI/LLMs", "Statistics"],
  },
  {
    title: "cloud",
    icon: Cloud,
    cmd: "$ gcloud deploy",
    skills: ["Google Cloud", "Cloud Run", "Pub/Sub", "Cloud Logging", "Compute Engine", "AWS", "Docker"],
  },
  {
    title: "web_dev",
    icon: Globe,
    cmd: "$ npm run dev",
    skills: ["React", "Node.js", "Vite", "Tailwind CSS", "REST APIs", "Socket.io", "Next.js"],
  },
  {
    title: "databases",
    icon: Terminal,
    cmd: "$ mongo --connect",
    skills: ["Firebase", "MongoDB", "Supabase", "PostgreSQL", "Git/GitHub", "Kali Linux", "Vertex AI"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">02.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Skills</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">$</span> ./skills --list-all
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-[10px] text-muted-foreground font-mono">~/{category.title}/</span>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <code className="text-xs text-primary/60 font-mono">{category.cmd}</code>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary/50 text-muted-foreground text-xs rounded font-mono border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "8+", label: "LANGUAGES", prefix: "int" },
              { value: "10+", label: "CLOUD_SERVICES", prefix: "gcp" },
              { value: "15+", label: "TOOLS", prefix: "dev" },
              { value: "95%", label: "ML_ACCURACY", prefix: "ml" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-card border border-border rounded-lg text-center hover:border-primary/30 transition-colors">
                <code className="text-[10px] text-primary/50 font-mono">{stat.prefix}::</code>
                <p className="text-2xl font-bold text-primary font-mono">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
