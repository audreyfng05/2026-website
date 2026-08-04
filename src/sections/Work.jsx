import './Work.css'
import spotifyUI from '../assets/SpotifyUI.png'
import habitTracker from '../assets/HabitTracker.png'
import pearlHacks from '../assets/PearlHacks.png'

const projects = [
  {
    title: 'Spotify UI',
    image: spotifyUI,
    description: "For an App Team assignment, I recreated Spotify's UI in SwiftUI. I focused on the now-playing screen, built around the track \"Sienna\" by The Marías, reproducing Spotify's layout and visual design which includes album artwork, playback controls, track information, and the overall interface aesthetic. My current implementation is a static recreation of the UI but going forward, I plan to add functional playback and interactivity.",
    tools: 'SwiftUI, XCode',
  },
  {
    title: 'Habit Tracker',
    image: habitTracker,
    description: "For this project, I built a monthly habit tracker web app that automatically detects the current month, date, and year and then generates a calendar where users can set a custom habit and mark each day as complete with a click. I implemented persistent progress tracking using the browser's localStorage API, so completed days are saved across sessions, and I added a running completion counter, leap-year handling, and a reset button to clear progress.",
    tools: 'JavaScript, HTML, CSS',
  },
  {
    title: 'PearlHacks Website',
    image: pearlHacks,
    link: 'https://pearlhacks.com/',
    description: "I collaborated with my technology committee team to update and maintain the Pearl Hacks website. Working from a Figma prototype, I refreshed the site for the current year by updating content and descriptions, building out UI components with Next.js, NextUI, and TailwindCSS, and adding features like a calendar countdown. Data fetching and state were handled with React Query, and the site was deployed on Firebase Hosting.",
    tools: 'Next.js, NextUI, TailwindCSS, TypeScript, React Query, Firebase Hosting',
  },
]

function Work() {
  return (
    <section id="work" className="section">
      <h2 className="section-title">work</h2>
      <p className="section-subtitle">things i've built!</p>

      <div className="projects-grid">
        {projects.map((work, index) => (
          <div key={`${work.title}-${index}`} className="card work-card">
            <img
              src={work.image}
              alt={work.title}
              className="work-image"
            />
            <div className="work-content">
              {work.link ? (
                <a href={work.link} target="_blank" rel="noreferrer" className="work-title work-link">
                  {work.title}
                </a>
              ) : (
                <h3 className="work-title">{work.title}</h3>
              )}
              <p className="work-description">{work.description}</p>
              <p className="work-tools"><strong>Tools Used:</strong> {work.tools}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
