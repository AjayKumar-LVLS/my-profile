import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "Aug 2022 — Present",
    title: "Senior Software Verification Engineer",
    company: "CS Group, Montreal",
    description:
      "Leading HIL/SIL testing for turbofan and turboshaft engine control systems. Currently working on PW210S turboshaft engine control module and previously on PW800 series (PW814G, PW812D) FADEC-controlled turbofan engines. Developing Level A software test cases, performing white-box/black-box testing, and conducting independent reviews ensuring 100% structural and functional coverage per DO-178C standards.",
    technologies: ["C", "C++", "MATLAB", "Simulink", "SCADE", "LDRA Testbed", "VBA", "DO-178C", "DO-330"],
  },
  {
    period: "Jan 2021 — Apr 2023",
    title: "Graduate Research",
    company: "Concordia University, Montreal",
    description:
      "Completed Master's thesis on Radio Resource Allocation using Neuromorphic Computing. Designed radio resource allocation for downlink OFDMA systems, transformed problems into QUBO format, and compared performance across Neuromorphic, Quantum, and CPU computation. Published at NICE 2023.",
    technologies: ["Python", "MATLAB", "Gurobi", "D-Wave Ocean", "LAVA", "AWS", "MongoDB", "Flask"],
  },
  {
    period: "Aug 2016 — Jan 2021",
    title: "Software Engineer",
    company: "Moog India Technology Center, Bangalore",
    description:
      "Performed high-level and low-level testing of embedded C code for flight control modules on Embraer, Gulfstream, A350, and C919 aircraft programs. Conducted model-based testing per DO-178B/C standards. Led UAS Neo software verification using Python scripting for test automation.",
    technologies: ["C", "C++", "Python", "MATLAB", "Simulink", "IBM RTRT", "DO-178B", "DO-178C"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                  {exp.title}
                  <span className="text-muted-foreground font-normal">·</span>
                  <span className="text-muted-foreground font-normal">
                    {exp.company}
                  </span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
