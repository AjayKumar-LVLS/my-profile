"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const statuses = [
  "Conducting HIL/SIL testing",
  "Developing DO-178C test cases",
  "Reviewing FADEC control modules",
  "Building safer aviation systems",
]

export function HeroSection() {
  const [statusIndex, setStatusIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((current) => (current + 1) % statuses.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
          {/* Profile Picture */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10">
              <Image
                src="/my-profile/images/profile.jpg"
                alt="Ajay Kumar Lakshmipura Vijaykumar"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-primary text-primary-foreground shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-foreground"></span>
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Currently: <span className="text-foreground">{statuses[statusIndex]}</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-muted-foreground">Hello, I&apos;m</span>
              <br />
              <span className="text-foreground">Ajay Kumar</span>
              <br />
              <span className="text-primary">Lakshmipura Vijaykumar</span>
            </h1>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Senior Software Verification Engineer with 8+ years in aerospace systems,
          embedded C/C++ expertise, and DO-178C compliance. Specialized in HIL/SIL testing
          for turbofan and turboshaft engine control systems.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["DO-178C", "HIL/SIL Testing", "Embedded Systems", "FADEC", "Aerospace"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Button asChild size="lg">
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://linkedin.com/in/AjayKumarLV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://github.com/AjayKumar-LVLS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <Link
            href="#about"
            className="animate-bounce p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
