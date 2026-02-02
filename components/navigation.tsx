"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#achievements", label: "achievements" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary/10 border border-primary/50 rounded flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-lg font-bold">
              <span className="text-primary">V</span>
              <span className="text-foreground">S</span>
              <span className="text-primary animate-pulse">_</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-mono transition-all rounded",
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <span className="text-primary/60">{String(index + 1).padStart(2, '0')}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild size="sm" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">
                <span className="text-primary-foreground/70 mr-1">$</span>
                hire_me
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-primary border border-border/50 rounded hover:border-primary/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 font-mono text-sm rounded transition-colors",
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-primary/60 mr-2">{String(index + 1).padStart(2, '0')}.</span>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Button asChild size="sm" className="w-full font-mono">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <span className="opacity-70 mr-1">$</span>
                    hire_me
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
