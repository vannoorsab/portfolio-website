"use client"

import Image from "next/image"
import { Shield, Brain, Cloud, Code, ChevronRight } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Ethical hacking, digital forensics, and threat intelligence systems.",
    cmd: "nmap -sV",
  },
  {
    icon: Brain,
    title: "AI & ML",
    description: "Building intelligent systems with ML pipelines, 95% accuracy models.",
    cmd: "python train.py",
  },
  {
    icon: Cloud,
    title: "Cloud",
    description: "Google Cloud Innovator. Scalable, secure cloud-native solutions.",
    cmd: "gcloud deploy",
  },
  {
    icon: Code,
    title: "Development",
    description: "Full-stack with focus on clean code and performance.",
    cmd: "npm run build",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-24 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">01.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">$</span> cat about.txt
            </h2>
          </div>

          {/* Profile Image at Top */}
          <div className="flex justify-center mb-12">
            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl hover:border-primary transition-colors">
              <Image
                src="/images/profile.jpg"
                alt="Vannoor Sab - Developer Profile"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Terminal-style content */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">~/about.txt</span>
              </div>

              <div className="p-6 font-mono text-sm space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">{">"}</span> Computer Science (Cybersecurity) student with hands-on experience in{" "}
                  <span className="text-primary">Data Science</span>,{" "}
                  <span className="text-primary">Machine Learning</span>, and{" "}
                  <span className="text-primary">Cloud Computing</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">{">"}</span> Experienced in building scalable ML models with{" "}
                  <span className="text-foreground">95% accuracy</span>, real-time data pipelines,
                  and security analytics systems.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">{">"}</span> Strong foundation in{" "}
                  <span className="text-foreground">Java, Python, statistics, supervised/unsupervised learning, and SQL</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-primary">{">"}</span> Ranked{" "}
                  <span className="text-primary">Top 0.4%</span> (near 100th out of 25,000+ teams) in{" "}
                  <span className="text-foreground">Amazon ML Challenge 2025</span>.
                </p>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground/60 text-xs">// tech_stack</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Java", "Python", "TypeScript", "GCP", "ML/AI", "React", "Node.js", "MongoDB"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-secondary/50 text-primary text-xs rounded border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group p-5 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                      <code className="text-[10px] text-primary/60">{item.cmd}</code>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  <ChevronRight className="h-4 w-4 text-primary/50 mt-3 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "Top 0.4%", label: "AMAZON_ML_RANK", icon: ">" },
              { value: "95%", label: "ML_ACCURACY", icon: ">" },
              { value: "5★ x3", label: "HACKERRANK", icon: ">" },
              { value: "5/6", label: "CONTEST_WINS", icon: ">" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border/50 rounded-lg p-4 text-center hover:border-primary/30 transition-colors">
                <p className="text-2xl md:text-3xl font-bold text-primary font-mono">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
