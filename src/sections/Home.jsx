import './Home.css'

function Home() {
  return (
    <section id="home" className="home-section">
      <p className="home-welcome">welcome to my site!</p>

      <div className="home-photo-card" aria-label="bear gif">
        <img
          src="/src/assets/Pixel Hearts Sticker.gif"
          alt="bear gif"
          className="home-gif"
        />
      </div>

      <div className="home-buttons">
        <a href="#about" className="btn btn-pink"
          onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>
          get to know me
        </a>
        <a href="#work" className="btn btn-lavender"
          onClick={(e) => { e.preventDefault(); document.getElementById('work').scrollIntoView({ behavior: 'smooth' }) }}>
          see my work
        </a>
      </div>
    </section>
  )
}

export default Home
