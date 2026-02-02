"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Terminal, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const roles = [
  "Aspiring Software Developer",
  "Cybersecurity Engineer",
  "Cloud Developer",
  "AI/ML Specialist",
  "Data Science Enthusiast",
]

const codeLines = [
  "const developer = {",
  '  name: "Vannoor Sab",',
  '  location: "Andhra Pradesh, India",',
  "  skills: [",
  '    "Java", "Python", "TypeScript",',
  '    "GCP", "AWS", "ML/AI"',
  "  ],",
  '  status: "Open to opportunities"',
  "};",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentCodeLine, setCurrentCodeLine] = useState(0)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  useEffect(() => {
    if (currentCodeLine < codeLines.length) {
      const timeout = setTimeout(() => {
        setTerminalLines(prev => [...prev, codeLines[currentCodeLine]])
        setCurrentCodeLine(prev => prev + 1)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [currentCodeLine])

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,65,0.02)_2px,rgba(0,255,65,0.02)_4px)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 pt-16 pb-8 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="space-y-8">
            {/* Terminal prompt */}
            <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <span className="text-primary">root@vannoor</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-muted-foreground">$</span>
              <span className="ml-1 text-foreground">whoami</span>
              <span className="animate-pulse text-primary">_</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono">
                <span className="text-primary">{">"}</span>{" "}
                <span className="text-foreground">Vannoor</span>
                <span className="text-primary">_</span>
                <span className="text-foreground">Sab</span>
              </h1>

              <div className="h-12 flex items-center">
                <span className="text-xl md:text-2xl font-mono text-muted-foreground">
                  <span className="text-primary mr-2">$</span>
                  <span className="text-foreground">{displayText}</span>
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-mono text-sm">
              <span className="text-primary">{"/**"}</span>
              <br />
              <span className="text-muted-foreground ml-2">* Building secure, intelligent systems at the</span>
              <br />
              <span className="text-muted-foreground ml-2">* intersection of cybersecurity and AI.</span>
              <br />
              <span className="text-muted-foreground ml-2">* Top 0.4% in Amazon ML Challenge 2025.</span>
              <br />
              <span className="text-primary">{" */"}</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {[
                { label: "ML_ACCURACY", value: "95%" },
                { label: "AMAZON_RANK", value: "0.4%" },
                { label: "WINS", value: "5/6" },
                { label: "HACKERRANK", value: "5★x3" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card/50 border border-border/50 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-mono group bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#projects">
                  <Terminal className="mr-2 h-4 w-4" />
                  ./view_projects
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono border-primary/50 text-primary hover:bg-primary/10 hover:text-primary bg-transparent">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  ./contact_me
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs text-muted-foreground font-mono">{"// social_links"}</span>
              {[
                { icon: Github, href: "https://github.com/vannoorsab", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/vannoorsab", label: "LinkedIn" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
              <Link
                href="https://kaggle.com/vannoorsab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Kaggle"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.358z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right side - Code terminal */}
          <div className="w-full lg:w-auto mt-12 lg:mt-0">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/80 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">~/developer.config.js</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-1 min-h-[320px] bg-[#0a0a0a]">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-muted-foreground/40 w-6 text-right mr-4 select-none text-xs">{i + 1}</span>
                    <span className={
                      line.includes("const") ? "text-blue-400" :
                        line.includes(":") && line.includes('"') && !line.includes("[") ? "text-foreground" :
                          line.includes('"') ? "text-primary" :
                            line.includes("[") || line.includes("]") || line.includes("{") || line.includes("}") || line.includes(",") ? "text-muted-foreground" :
                              "text-foreground"
                    }>
                      {line}
                    </span>
                  </div>
                ))}
                {currentCodeLine >= codeLines.length && (
                  <div className="flex items-center mt-6 pt-4 border-t border-border/30">
                    <span className="text-primary/60 w-6 text-right mr-4 select-none text-xs">{">>"}</span>
                    <span className="text-primary">node developer.config.js</span>
                  </div>
                )}
                {currentCodeLine >= codeLines.length && (
                  <div className="flex items-center mt-2">
                    <span className="text-muted-foreground/40 w-6 text-right mr-4 select-none text-xs"></span>
                    <span className="text-green-400">Ready to build amazing things...</span>
                    <span className="animate-pulse text-primary ml-1">_</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badges */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {["GCP", "AWS", "Python", "Java", "React", "Node.js"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-card border border-border/50 rounded text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
