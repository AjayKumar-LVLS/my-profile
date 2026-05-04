import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Master of Applied Science",
    field: "Electrical and Computer Engineering",
    school: "Concordia University",
    location: "Montreal, QC, Canada",
    period: "Jan 2021 — Apr 2023",
    gpa: "GPA: 3.86 / 4.30",
    courses: [
      "Software Engineering",
      "Programming on Cloud",
      "Cloud Networks",
      "Telecommunication Networks",
      "Higher Layer Telecommunication Protocols",
    ],
  },
  {
    degree: "Bachelor of Engineering",
    field: "Electrical and Computer Engineering",
    school: "Bangalore Institute of Technology",
    location: "Bangalore, India",
    period: "Jun 2012 — Jun 2016",
    gpa: "GPA: 7.2 / 10",
    courses: [
      "C Language",
      "C++",
      "Microprocessor",
      "Microcontroller",
      "Embedded Systems",
      "Communication Networks",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Education
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {edu.period}
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.field}</p>
                    <p className="mt-2 text-muted-foreground">
                      {edu.school} · {edu.location}
                    </p>
                    <p className="mt-1 text-sm text-primary font-mono font-medium">
                      {edu.gpa}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Relevant Courses</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
