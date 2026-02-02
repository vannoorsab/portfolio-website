"use client"

import Link from "next/link"

import { Trophy, Award, Star, Medal, Code, Cloud, Zap, ExternalLink, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const achievements = [
  {
    category: "hackathons",
    icon: Trophy,
    items: [
      {
        title: "1st Place - GDG TechSprint Hackathon",
        platform: "GDG on Campus RGMCET",
        description: "Secured 1st place among competitive student teams",
        highlight: true,
        certLink: null,
      },
      {
        title: "Top 0.4% - Amazon ML Challenge 2025",
        platform: "Amazon",
        description: "Ranked near 100th out of 25,000+ teams",
        highlight: true,
        certLink: null,
      },
      {
        title: "P1 Rank - Kaggle Community Olympiad 2025",
        platform: "Kaggle",
        description: "1st place on regional leaderboard",
        highlight: true,
        certLink: "https://drive.google.com/file/d/18X6Woy2MkQ7diRHGNKRBkeM7cHKp13Et/view?usp=sharing",
      },
      {
        title: "Silver Medal - NFL Big Data Bowl 2026",
        platform: "Kaggle",
        description: "67th position out of thousands of teams",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1w-UDpqnRLH8ZhaVC5dkoMa0DGp_v_6r7/view?usp=sharing",
      },
      {
        title: "Top 10 - ArcticX Winter TechSprint",
        platform: "GDG On Campus Dr. AITD",
        description: "Shortlisted in Top 10 teams at hackathon",
        highlight: false,
        certLink: null,
      },
      {
        title: "Winner - DefendXCoding",
        platform: "Coding Competition",
        description: "Won competitive coding challenge",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1TFuxmRtJ-twnPko0ti_xS9tZP5dEbFBx/view?usp=sharing",
      },
    ],
  },
  {
    category: "competitive_programming",
    icon: Code,
    items: [
      {
        title: "5-Star Rating (Problem Solving)",
        platform: "HackerRank",
        description: "Exceptional algorithmic problem-solving",
        highlight: true,
        certLink: "https://www.hackerrank.com/certificates/08304de96375",
      },
      {
        title: "5-Star Rating (Java)",
        platform: "HackerRank",
        description: "Maximum star rating in Java",
        highlight: true,
        certLink: null,
      },
      {
        title: "5-Star Rating (C)",
        platform: "HackerRank",
        description: "5-star rating with strong DSA fundamentals",
        highlight: true,
        certLink: null,
      },
      {
        title: "Software Engineer Intern Certificate",
        platform: "HackerRank",
        description: "Verified skills assessment certification",
        highlight: true,
        certLink: "https://www.hackerrank.com/certificates/814741e3128a",
      },
      {
        title: "Winner - 5/6 Coding Contests",
        platform: "RGMCET",
        description: "Won 5 out of 6 department coding contests",
        highlight: false,
        certLink: null,
      },
    ],
  },
  {
    category: "cloud_certifications",
    icon: Cloud,
    items: [
      {
        title: "Microsoft Azure Fundamentals (AZ-900)",
        platform: "Microsoft",
        description: "Cloud concepts, Azure services, security & compliance",
        highlight: true,
        certLink: "https://learn.microsoft.com/api/credentials/share/en-in/VannoorSab/EA943BB89B626E30?sharingId=86EECABA6A4411EB",
      },
      {
        title: "Champion Milestone - Google Cloud Arcade",
        platform: "Google Cloud",
        description: "Highest milestone in Cloud Arcade program",
        highlight: true,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
      {
        title: "Gen AI Academy Completion",
        platform: "Google Cloud & Hack2Skill",
        description: "Completed comprehensive Gen AI program",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1d7Yijbbyp6Oiq0dfKK7f--eOp0qP8ylw/view?usp=sharing",
      },
      {
        title: "Google Gen AI Study Jams 2024",
        platform: "Google Cloud",
        description: "Completed Generative AI learning program",
        highlight: false,
        certLink: "https://drive.google.com/file/d/1vnO0WexKWr8Ynfzm9inCoA91veSRgpye/view?usp=sharing",
      },
    ],
  },
  {
    category: "courses_certifications",
    icon: Award,
    items: [
      {
        title: "Google IT Automation with Python",
        platform: "Google",
        description: "Professional Certificate in Python automation",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1qMXPDaFEmHp7LI9dsTBcBBKwQoYVBUAM/view?usp=sharing",
      },
      {
        title: "Python Programming",
        platform: "edX",
        description: "Comprehensive Python programming course",
        highlight: false,
        certLink: "https://drive.google.com/file/d/1M7PX_7oAKyShT3lDUQ7vxCoAuNaPmYLc/view?usp=sharing",
      },
      {
        title: "Introduction to Cybersecurity",
        platform: "Cisco",
        description: "Foundational cybersecurity concepts and practices",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1KngSAUXLqEnjug55PoI4ox66ajZk_20f/view?usp=sharing",
      },
      {
        title: "GenAI Apps with Gemini",
        platform: "Google Cloud",
        description: "Building AI applications using Gemini",
        highlight: false,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
    ],
  },
  {
    category: "skill_badges",
    icon: Shield,
    items: [
      {
        title: "Prompt Design in Vertex AI",
        platform: "Google Cloud",
        description: "Advanced prompt engineering techniques",
        highlight: false,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
      {
        title: "Cloud Security Principles",
        platform: "Google Cloud",
        description: "Enterprise-grade cloud security",
        highlight: false,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
      {
        title: "Security Engineering on GCP",
        platform: "Google Cloud",
        description: "Security best practices in cloud",
        highlight: false,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
      {
        title: "API Gateway Skill Badge",
        platform: "Google Cloud",
        description: "Designing secure API gateways",
        highlight: false,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
    ],
  },
  {
    category: "community_programs",
    icon: Star,
    items: [
      {
        title: "Build and Blog Marathon Finisher (S8)",
        platform: "GDG Cloud Kochi",
        description: "Season 8 finisher - Dec 2024 at Google Campus",
        highlight: true,
        certLink: "https://drive.google.com/file/d/1h_nVw_cEFxYGwvggHSOem8kPi3NInIYS/view?usp=sharing",
      },
      {
        title: "Code Vipassana Season 10 Completion",
        platform: "GDG Cloud",
        description: "Completed intensive coding program",
        highlight: false,
        certLink: "https://drive.google.com/file/d/1qblx8uqjxC4s2yyEvvv0n84zqDg8PY99/view?usp=sharing",
      },
      {
        title: "Google Cloud Innovator",
        platform: "Google Cloud",
        description: "Recognized as GCP community innovator",
        highlight: true,
        certLink: "https://www.credly.com/users/vannoor_sab",
      },
      {
        title: "GDG Cloud & Certifications Lead",
        platform: "GDG on Campus RGMCET",
        description: "Leading cloud initiatives for student community",
        highlight: false,
        certLink: null,
      },
    ],
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-mono text-sm">05.</span>
              <div className="h-px w-12 bg-primary/50" />
              <span className="text-primary font-mono text-sm uppercase tracking-wider">Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono">
              <span className="text-primary">$</span> cat achievements.log
            </h2>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="p-5 bg-card border border-primary/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">Amazon ML</p>
                  <p className="text-xl font-bold text-foreground font-mono">Top 0.4%</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">// 100th of 25,000+ teams</p>
            </div>

            <div className="p-5 bg-card border border-primary/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Medal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">Kaggle</p>
                  <p className="text-xl font-bold text-foreground font-mono">P1 Rank</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">// Olympiad 2025 Winner</p>
            </div>

            <div className="p-5 bg-card border border-primary/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">Azure</p>
                  <p className="text-xl font-bold text-foreground font-mono">AZ-900</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">// Microsoft Certified</p>
            </div>

            <div className="p-5 bg-card border border-primary/30 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">HackerRank</p>
                  <p className="text-xl font-bold text-foreground font-mono">3x 5-Star</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-mono">// PS, Java & C</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((category) => (
              <div
                key={category.category}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-4 text-xs text-muted-foreground font-mono">~/{category.category}/</span>
                  <category.icon className="h-3 w-3 text-primary ml-auto" />
                </div>

                <div className="p-4 space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className={cn(
                        "group flex gap-3 p-3 rounded transition-colors",
                        item.highlight ? "bg-primary/5 border border-primary/20" : "hover:bg-secondary/50"
                      )}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                        {item.highlight ? (
                          <Medal className="h-3 w-3 text-primary" />
                        ) : (
                          <Star className="h-3 w-3 text-primary/60" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-mono text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.title}
                          </h4>
                          {item.certLink && (
                            <Link
                              href={item.certLink}
                              className="flex-shrink-0 flex items-center gap-1 text-[10px] text-primary hover:text-primary/80 font-mono transition-colors"
                            >
                              <span>view</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </Link>
                          )}
                        </div>
                        <p className="text-[10px] text-primary/70 font-mono">{item.platform}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-tight">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
              {[
                { icon: Trophy, value: "6+", label: "WINS" },
                { icon: Zap, value: "0.4%", label: "AMAZON_ML" },
                { icon: Medal, value: "P1", label: "KAGGLE" },
                { icon: Cloud, value: "10+", label: "BADGES" },
                { icon: Star, value: "3x", label: "5_STAR" },
                { icon: Award, value: "15+", label: "CERTS" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xl font-bold text-primary font-mono">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
