import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Saiteja Sripathi",
    role: "Senior Engineering Professional | Team Lead | Manager",
    content:
      "Ajay contributed to the Verification activities of the Pratt & Whitney aircraft engines PW545D and PW210S. His contributions greatly helped the PW545D team achieve its certification milestone. Ajay was requested to support the team during crisis and he has done just right. He handled a complex and huge test with over 30 requirements and tested them to conform with DO178C. Ajay has great strengths of mentoring new team mates and curiosity to take up challenging tasks.",
  },
  {
    name: "Nabil Badri M.Eng., PMP, PMI-ACP",
    role: "Software Work Package Manager at Thales Canada",
    content:
      "Ajay demonstrated a good level of professionalism and technical expertise. He was responsible for writing System Integration Tests (SIT) and meticulously reporting the results. He exhibited a high intellectual curiosity, always eager to learn new skills and deepen his understanding of complex systems. This was particularly evident during his participation in the PW800 and Legacy AS software certification projects where he played a crucial role in achieving successful certification outcomes.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Testimonials
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-lg bg-card border border-border"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
