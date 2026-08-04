import './About.css'

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript',
  'TailwindCSS', 'Firebase', 'SwiftUI', 'Java', 'C', 'Python'
]

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">about me</h2>

      <div className="about-grid">

        <div className="card about-bio">
          <div className="bio-image-container">
            <img
              src="/src/assets/profile.jpg"
              alt="Audrey"
              className="bio-image"
            />
          </div>
          <div className="bio-text">
            <p>
              Hi! I'm Audrey, a Computer Science and Statistics student at{' '}
              UNC Chapel Hill. I love building things that look aesthetically pleasing!
            </p>
            <p style={{ marginTop: '1rem' }}>
              Outside of coding, I love photography and
              exploring new places!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About