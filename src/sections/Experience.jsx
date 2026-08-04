import './Experience.css'

const experiences = [
  {
    role: 'Software Development Intern',
    org: 'SAS',
    date: 'May 2026 - August 2026',
    bullets: [
      'Rebuilt the SAS Fraud Decisioning landing page as a modular React/TypeScript dashboard with reusable UI components, integrated with REST APIs and live-data access controls, plus persona-aware content and analytics widgets for global financial institutions.',
    ],
  },
  {
    role: 'iOS Developer',
    org: 'UNC App Team',
    date: 'Aug 2025 – Present',
    bullets: [
      'Currently enhancing iOS development skills by building prototype apps in Swift using Xcode, including a Spotify UI clone.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'PearlHacks',
    date: 'Aug 2025 – Present',
    bullets: [
      'Maintained and optimized the PearlHacks website using Next.js, TypeScript, NextUI, TailwindCSS, React Query, and Firebase Hosting, supporting over 500 participants with improved reliability and feature updates.',
    ],
  },
  {
    role: 'Math Undergraduate Learning Assistant',
    org: 'UNC Chapel Hill',
    date: 'Jan 2025 – Present',
    bullets: [
      'Supported students learning Calculus I in recitation sessions',
    ],
  },
  {
    role: 'Girls Who Code Tutor',
    org: 'Girls Who Code',
    date: 'Jan 2025 - Present',
    bullets: [
      'Mentored over 50 students (grades 6–12) as 1 of 10 TAs in Python and Matplotlib, delivering 10+ lessons and guiding 100% of students to complete projects creating data visualization questions and graphs.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">experience</h2>

      <div className="timeline experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="card timeline-card experience-card">
              <div className="timeline-header experience-header">
                <div>
                  <h3 className="timeline-role experience-role">{exp.role}</h3>
                  <p className="timeline-org">{exp.org}</p>
                </div>
                <span className="pill timeline-date experience-pill">
                  {exp.date}
                </span>
              </div>

              <ul className="timeline-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience