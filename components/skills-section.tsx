import { Code2, Wrench, Workflow, Cloud, Monitor, Award } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "MATLAB", "Java (Basics)"],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: [
      "LDRA Testbed",
      "Simulink",
      "SCADE Models",
      "IBM RTRT",
      "Eclipse",
      "PyCharm",
      "Visual Studio",
      "Code Blocks",
    ],
  },
  {
    title: "Standards & Methodologies",
    icon: Workflow,
    skills: [
      "DO-178B",
      "DO-178C",
      "DO-330",
      "DO-331-3",
      "V-Model",
      "Agile/Scrum",
      "Waterfall",
      "MISRA C",
    ],
  },
  {
    title: "Platforms & Testing",
    icon: Monitor,
    skills: [
      "HIL Testing",
      "SIL Testing",
      "State Flow",
      "Wireless Networks",
      "Windows",
      "Linux",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "NGINX", "OpenSSL", "GitHub", "JIRA", "DOORS", "Microsoft Teams"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      "Udemy - Master C & C++",
      "CIADI - Thriving in Aerospace",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
