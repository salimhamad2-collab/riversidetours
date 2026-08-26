import './App.css'

function App() {
  const whatsappNumber = '254718012630'

  const bookOnWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        'Hello Riverside Tours & Safaris, I would like to make a booking.'
      )}`,
      '_blank'
    )
  }

  const activities = [
    {
      title: 'Kongo River Sunset',
      text: 'Enjoy a beautiful sunset experience along the Kongo River.',
      icon: '🌅',
    },
    {
      title: 'Kayaking',
      text: 'Explore the river at your own pace by kayak.',
      icon: '🛶',
    },
    {
      title: 'Paddleboarding',
      text: 'Experience the calm waters while paddleboarding.',
      icon: '🏄',
    },
    {
      title: 'Canoeing',
      text: 'Relax and discover the river by canoe.',
      icon: '🚣',
    },
    {
      title: 'Birdwatching',
      text: 'Discover the beautiful birdlife around the river.',
      icon: '🐦',
    },
    {
      title: 'River Excursions',
      text: 'Explore nature and enjoy memorable riverside experiences.',
      icon: '🌴',
    },
  ]

  return (
    <div className="app">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Riverside Tours & Safaris</div>
          <button onClick={bookOnWhatsApp}>Book Now</button>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">EXPLORE • DISCOVER • EXPERIENCE</p>
          <h1>Discover the Beauty of Kongo River</h1>
          <p>
            Memorable river adventures, watersports and unforgettable
            experiences on Kenya's South Coast.
          </p>

          <button className="primary-button" onClick={bookOnWhatsApp}>
            Book Your Experience
          </button>
        </div>
      </header>

      <main>
        <section className="intro">
          <p className="eyebrow">RIVERSIDE TOURS & SAFARIS</p>
          <h2>Adventure Starts Here</h2>
          <p>
            From peaceful river excursions to exciting watersports and magical
            sunsets, we create experiences you'll remember.
          </p>
        </section>

        <section className="activities">
          <h2>Our Experiences</h2>

          <div className="cards">
            {activities.map((activity) => (
              <article className="card" key={activity.title}>
                <div className="icon">{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
                <button onClick={bookOnWhatsApp}>Enquire</button>
              </article>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>Ready for Your Riverside Adventure?</h2>
          <p>Contact us on WhatsApp and let's plan your experience.</p>
          <button className="primary-button" onClick={bookOnWhatsApp}>
            WhatsApp Us
          </button>
        </section>
      </main>

      <footer>
        <h3>Riverside Tours & Safaris</h3>
        <p>South Coast, Kenya</p>
        <p>© 2026 Riverside Tours & Safaris</p>
      </footer>
    </div>
  )
}

export default App
