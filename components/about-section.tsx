export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a <span className="text-foreground font-medium">Senior Software Verification Engineer</span> with
            over 8 years of experience in the aerospace industry. Currently at CS Group in Montreal,
            I lead verification activities for turbofan and turboshaft engine control systems,
            ensuring compliance with <span className="text-primary">DO-178C</span> safety-critical standards.
          </p>
          
          <p>
            My expertise spans <span className="text-primary">embedded C/C++ development</span>,
            Hardware-in-the-Loop (HIL) and Software-in-the-Loop (SIL) testing, and FADEC
            control systems. I&apos;ve contributed to major aviation programs including the
            <span className="text-foreground font-medium"> PW800 turbofan family, PW210S turboshaft, Embraer, Gulfstream, A350, and C919</span>.
          </p>
          
          <p>
            I hold a <span className="text-foreground font-medium">Master&apos;s in Electrical and Computer Engineering</span> from
            Concordia University (GPA: 3.86/4.30) where my thesis on Radio Resource Allocation
            using Neuromorphic Computing was published at NICE 2023. My Bachelor&apos;s is from
            Bangalore Institute of Technology.
          </p>

          <p>
            Beyond coding for safety-critical systems, I enjoy mentoring junior engineers,
            contributing to tool qualification activities per DO-330 standards, and
            exploring new technologies in verification automation. When not working,
            you&apos;ll find me playing badminton, cricket, or table tennis.
          </p>
        </div>
      </div>
    </section>
  )
}
