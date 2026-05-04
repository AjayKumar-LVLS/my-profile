import { ExternalLink, Plane, Cpu, Satellite, Brain, Globe, Database, Award } from "lucide-react"

const projects = [
  {
    title: "PW210S Turboshaft Engine Verification",
    description:
      "Currently leading HIL/SIL testing for the PW210S turboshaft helicopter engine control module. Developing Level A requirement-based test cases, executing white-box/black-box tests, and ensuring 100% structural and functional coverage per DO-178C standards.",
    icon: Plane,
    technologies: ["C", "C++", "MATLAB", "Simulink", "LDRA Testbed", "DO-178C"],
  },
  {
    title: "PW800 Turbofan Family (PW814G, PW812D)",
    description:
      "Conducted SIL-based integration and unit-level testing of FADEC-controlled PW800 turbofan engine control module and Data Control Unit software. Performed tool qualification per DO-178/DO-330 standards.",
    icon: Cpu,
    technologies: ["C", "C++", "SCADE", "VBA", "DO-178C", "DO-330"],
  },
  {
    title: "Legacy Projects (PW545D, Embraer, Gulfstream, A350, C919)",
    description:
      "Performed model-based high-level and low-level testing for flight control modules and electronics modules. Developed test specifications, test cases, test harnesses, and conducted failure analysis following DO-178B/C standards.",
    icon: Satellite,
    technologies: ["C", "C++", "Python", "Simulink", "IBM RTRT", "DO-178B"],
  },
  {
    title: "UAS Neo Software Verification",
    description:
      "Performed model-based testing for Neo software of an unmanned aerial vehicle. Generated test scripts, test cases, and verification files using Python scripting. Executed tests on hardware with result analysis.",
    icon: Satellite,
    technologies: ["Python", "C", "Simulink", "Model-Based Testing"],
  },
  {
    title: "Radio Resource Allocation (Master Thesis)",
    description:
      "Designed radio resource allocation for downlink OFDMA systems in wireless networks. Transformed the problem into QUBO format and compared performance across Neuromorphic (LAVA), Quantum (D-Wave), and CPU computation. Published at NICE 2023.",
    icon: Brain,
    technologies: ["Python", "MATLAB", "Gurobi", "D-Wave Ocean", "LAVA"],
  },
  {
    title: "Community-based Advertisement Distribution",
    description:
      "Designed targeted advertisement system using UML diagrams through Agile process. Developed 'News on Go' application using Python Flask with NLP integration and AWS cloud deployment.",
    icon: Globe,
    technologies: ["Python", "Flask", "MongoDB", "AWS", "NLP", "HTML/CSS"],
  },
]

const publications = [
  {
    title: "A Case Study on the Use of Lava Neuromorphic Framework for Radio Resource Allocation",
    venue: "NICE 2023",
  },
  {
    title: "Best Project Award - ICDE Skill Stack",
    venue: "Concordia University",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <project.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2 flex-wrap">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Publications & Awards */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Publications & Awards
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
            >
              <div className="p-2 rounded-md bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{pub.title}</h4>
                <p className="text-sm text-muted-foreground">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
