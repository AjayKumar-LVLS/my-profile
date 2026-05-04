import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lvlsajaykumar@gmail.com",
    href: "mailto:lvlsajaykumar@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "514-571-2810",
    href: "tel:514-571-2810",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Montreal, Canada",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/AjayKumarLV",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AjayKumar-LVLS",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on engineering and software projects? I&apos;m always
            interested in discussing new opportunities, especially in aerospace,
            embedded systems, and safety-critical software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-6">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-6">Connect Online</h4>
            <div className="space-y-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-md hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild className="w-full" size="lg">
                <Link href="mailto:lvlsajaykumar@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send an Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
