'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const statuses = [
  'Reviewing avionics test reports',
  'Designing cloud-backed verification tools',
  'Mentoring junior engineers',
  'Building safer embedded systems',
];

export default function Home() {
  const [statusIndex, setStatusIndex] = useState(0);
  const [profileImageLoaded, setProfileImageLoaded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((current) => (current + 1) % statuses.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="page-shell">
      <div className="status-bar" aria-live="polite">
        <span className="status-label">Current Work Status</span>
        <span className="status-value">{statuses[statusIndex]}</span>
      </div>

      <section className="hero-section profile-layout">
        <div className="profile-panel">
          <div className="profile-avatar" aria-label="Profile image hover toggle">
            {profileImageLoaded ? (
              <img
                className="profile-image"
                src="/profile.jpg"
                alt="Profile"
                onError={() => setProfileImageLoaded(false)}
              />
            ) : (
              <div className="profile-image">AJ</div>
            )}
            <div className="fun-image">🎉</div>
          </div>

          <div className="profile-summary">
            <p className="eyebrow">Hello, I’m</p>
            <h1>Ajay Kumar Lakshmipura Vijaykumar</h1>
            <p className="hero-copy">
              Software engineer with aviation systems test experience, embedded C/C++ expertise,
              and cloud-backed web application development.
            </p>

            <div className="skill-tag-list">
              <span className="skill-pill dept-product">Aerospace</span>
              <span className="skill-pill dept-engineering">Embedded Software</span>
              <span className="skill-pill dept-cloud">Verification & Validation</span>
              <span className="skill-pill dept-data">Embedded Systems</span>
            </div>

            <div className="button-row">
              <Link href="#contact" className="primary-button">
                Contact me
              </Link>
              <Link href="https://www.linkedin.com/in/AjayKumarLV" target="_blank" rel="noreferrer" className="secondary-button">
                LinkedIn
              </Link>
              <Link href="https://github.com/AjayKumar-LVLS" target="_blank" rel="noreferrer" className="secondary-button">
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-copy-panel">
          <section className="section-card about-panel" id="about">
            <h2>About Me</h2>
            <p>
              Experienced Software Engineer with a demonstrated history of working in the aerospace industry.
              Skilled in C & C++ Programming, Matlab, SCADE, Microsoft Excel, Python, Verification and Validation of Embedded C code,
              Model based Development and Verification in Matlab Simulink. Strong engineering professional with a Bachelor of Engineering
              focused in Electronics and Communications Engineering from Bangalore Institute of Technology. Completed Masters in Electrical
              and Computer Engineering at Concordia University.
            </p>
          </section>

          <section className="section-card kudos-card">
            <div className="section-header">
              <h2>Kudos</h2>
              <p>Peer testimonials and appreciation feed</p>
            </div>
            <div className="kudos-feed">
              <article className="testimonial-card">
                <h3>Saiteja Sripathi</h3>
                <p className="recommendation-role">Senior Engineering Professional | Team Lead | Manager | Strategic Vision, Problem Solving</p>
                <p>
                  Ajay contributed to the Verification activities of the Pratt & Whitney aircraft engines PW545D and PW210S.
                  His contributions greatly helped the PW545D team achieve its certification milestone. Ajay was requested to support the team during crisis
                  and he has done just right. He handled a complex and huge test with over 30 requirements and tested them to conform with DO178C.
                  Ajay has great strengths of mentoring new team mates and curiosity to take up challenging tasks.
                </p>
              </article>

              <article className="testimonial-card">
                <h3>Nabil Badri M.Eng., PMP, PMI-ACP</h3>
                <p className="recommendation-role">Software Work Package Manager at Thales Canada</p>
                <p>
                  I am pleased to write this recommendation for Ajay who worked with me as a Software Verification Engineer,
                  specializing in DO-178 standards. During his tenure, Ajay demonstrated a good level of professionalism and technical expertise.
                </p>
                <p>
                  Ajay was responsible for writing System Integration Tests (SIT) and meticulously reporting the results of these tests.
                  He demonstrated a good commitment to quality and he exhibited a high intellectual curiosity, always eager to learn new skills
                  and deepen his understanding of complex systems.
                </p>
                <p>
                  Ajay has a good active listening skills. He has a high ability to understand complex requirements and translate them into actionable tasks,
                  ensuring that all verification processes align with project objectives.
                </p>
                <p>
                  This was particularly evident during his participation in the PW800 and Legacy AS software certification PWC projects where he played
                  a crucial role in achieving successful certification outcomes.
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="section-card" id="skills">
        <h2>Skills</h2>
        <div className="grid-two">
          <article>
            <h3>Technical Skills</h3>
            <ul>
              <li>C, C++, Python, MATLAB, basic Java</li>
              <li>LDRA Testbed, NGINX, OpenSSL, MongoDB, AWS</li>
              <li>HTML, CSS, Flask, Django</li>
            </ul>
          </article>
          <article>
            <h3>Methods & Tools</h3>
            <ul>
              <li>Agile/Scrum, V-Model, Waterfall</li>
              <li>DO-178C, hardware-in-loop, software-in-loop</li>
              <li>GitHub, JIRA, DOORS, Microsoft Teams</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-card" id="projects">
        <h2>Projects</h2>
        <article>
          <h3>Legacy & PW210S Engine Verification</h3>
          <p>
            Worked on the Legacy project family PW545D (turbofan jet engine) and PW210S (turboshaft helicopter engine), focusing on HIL/SIL testing and
            integration and unit-level verification of engine control module software per DO-178C requirements.
          </p>
          <p className="recommendation-role">Tools & Software: C, C++, MATLAB Script, Simulink, SCADE Models, LDRA Testbed, VBA, Excel, Notepad++</p>
        </article>
        <article>
          <h3>PW800 Turbofan Family Testing</h3>
          <p>
            Conducted SIL-based integration and unit-level testing of FADEC-controlled PW800 turbofan engine control module and Data Control Unit software,
            ensuring compliance with DO-178C standards.
          </p>
        </article>
        <article>
          <h3>UAS Neo Software Verification</h3>
          <p>
            Performed model-based testing for Neo UAS software, generating Python-based test scripts, cases, and verification artifacts, then executing tests on hardware
            and analyzing results.
          </p>
          <p className="recommendation-role">Tools & Software: C, Python Script, Simulink</p>
        </article>
      </section>

      <section className="section-card" id="education">
        <h2>Education</h2>
        <div className="grid-two">
          <article>
            <h3>Concordia University</h3>
            <p>Master of Applied Science — Electrical and Computer Engineering</p>
            <p>2021–2022 | GPA 3.86/4.30</p>
          </article>
          <article>
            <h3>Bangalore Institute of Technology</h3>
            <p>Bachelor’s in Electrical and Computer Engineering</p>
            <p>2012–2016 | GPA 7.2/10</p>
          </article>
        </div>
      </section>

      <section className="section-card" id="academic-projects">
        <h2>Academic Projects</h2>
        <article>
          <h3>Information Capture and Dissemination Environment</h3>
          <p>
            Developed a Python Flask application with MongoDB, HTML/CSS, and Jira-based team workflows to recommend courses based on user interests.
          </p>
        </article>
        <article>
          <h3>Community-based Advertisement Distribution</h3>
          <p>
            Built a targeted advertisement system using Flask, AWS deployment, NLP, and MongoDB as part of an agile student project.
          </p>
        </article>
        <article>
          <h3>CDN Design and Implementation</h3>
          <p>
            Designed a content delivery network using Django, NGINX load balancing, SSL with OpenSSL, and cloud deployment on AWS/PythonAnywhere.
          </p>
        </article>
      </section>

      <section className="section-card" id="contact">
        <h2>Contact</h2>
        <p>
          Ready to collaborate on engineering and software projects. Reach out using email, phone, or LinkedIn.
        </p>
        <p className="contact-info">Email: lvlsajaykumar@gmail.com</p>
        <p className="contact-info">Phone: 514-571-2810</p>
        <p className="contact-info">LinkedIn: AjayKumarLV</p>
        <div className="button-row">
          <Link href="mailto:lvlsajaykumar@gmail.com" className="primary-button">
            Email Me
          </Link>
          <Link href="https://www.linkedin.com/in/AjayKumarLV" target="_blank" rel="noreferrer" className="secondary-button">
            LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}
