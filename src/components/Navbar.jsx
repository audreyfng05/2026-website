import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Navbar.css'

const links = ['home', 'about', 'experience', 'work']

function Navbar() {
  function handleClick(e, id) {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <span className="navbar-logo">✿ audrey</span>
      <div className="navbar-right">
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={(e) => handleClick(e, link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-socials">
          <a href="https://www.linkedin.com/in/audreyfng" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/audreyfng05" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
