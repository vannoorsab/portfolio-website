"use client"

import React from "react"
import { Mail, Github, Linkedin, MapPin, Send, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/vannoorsab",
    icon: Github,
    username: "vannoorsab",
    cmd: "git clone",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vannoorsab/",
    icon: Linkedin,
    username: "vannoorsab",
    cmd: "connect",
  },
  {
    name: "Email",
    href: "mailto:vanursab18@gmail.com",
    icon: Mail,
    username: "vanursab18@gmail.com",
    cmd: "mail -s",
  },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">07.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Contact</span>
              <div className="h-px w-12 bg-primary/50" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4">
              <span className="text-primary">$</span> ./initiate_contact.sh
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-mono text-sm">
              // Open to internships, hackathons, research collaborations, and exciting projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Social Links */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">~/socials/</span>
                </div>
                
                <div className="p-4 space-y-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 p-3 rounded hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/30"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                          {link.username}
                        </p>
                        <p className="text-[10px] text-primary/60 font-mono">{link.cmd}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm text-foreground">location</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  Nandyal, Andhra Pradesh, India
                </p>
                <p className="text-xs text-primary/60 font-mono mt-1">
                  // open to remote worldwide
                </p>
              </div>

              {/* Currently Seeking */}
              <div className="bg-card border border-primary/30 rounded-lg p-4">
                <h4 className="font-mono text-sm text-foreground mb-3">
                  <span className="text-primary">//</span> seeking
                </h4>
                <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                  {[
                    "Cybersecurity & AI/ML Internships",
                    "Hackathon Collaborations",
                    "Research & Open Source Projects",
                    "Technical Writing Opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary">{">"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-4 text-xs text-muted-foreground font-mono">~/send_message.sh</span>
              </div>
              
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mx-auto mb-4">
                      <Terminal className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-mono text-primary mb-2">Message sent!</h4>
                    <p className="text-sm text-muted-foreground font-mono">
                      // I'll respond as soon as possible
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-2">
                        <span className="text-primary">const</span> name =
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                        placeholder='"Your Name"'
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-2">
                        <span className="text-primary">const</span> email =
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                        placeholder='"your@email.com"'
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-2">
                        <span className="text-primary">const</span> message =
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground/50 resize-none"
                        placeholder='"Tell me about your project..."'
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-pulse">sending...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          ./send_message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-xs font-mono">
                <span className="text-primary">{">"}</span> {new Date().getFullYear()} Vannoor Sab
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
