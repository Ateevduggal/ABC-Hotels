import React from "react";
import "./About.css";

const About = () => {
  const journey = [
    {
      year: "2026",
      reign: "The Visionary",
      leader: "Ms. Lena Chen",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      title: "A Modern Sanctuary",
      content:
        "Today, the hotel stands as a masterpiece of contemporary refinement. Our suites blend state-of-the-art technology with hand-carved textures, offering an experience where every guest’s need is anticipated before it is spoken. From our Michelin-starred terrace to the silent luxury of our spa, we represent the pinnacle of modern 5-star hospitality.",
    },
    {
      year: "1968",
      reign: "The Socialite",
      leader: "Madam Anya Sharma",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      title: "A Cultural Beacon",
      content:
        'As the world changed, the hotel became a legendary meeting point for film icons and political visionaries. This era introduced our signature service style—discreet, personalized, and deeply rooted in the art of the "Grand Gesture".',
    },
    {
      year: "1924",
      reign: "The Founder",
      leader: "Sir Jonathan Vance",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      title: "The Foundation of Elegance",
      content:
        "Constructed during the height of the Jazz Age, the hotel was envisioned as a cliffside retreat for the European elite. The original architects used local limestone and white marble, materials that still form the soul of our grand lobby today.",
    },
  ];

  const reviews = [
    {
      quote:
        "A masterclass in quiet luxury. The service is clairvoyant, anticipating needs before they are whispered.",
      source: "International Travel Daily",
      date: "Oct 2025",
    },
    {
      quote:
        "The architecture doesn't compete with the Taj Mahal; it bows to it. The most refined view in Asia.",
      source: "Global Architectural Review",
      date: "Jan 2026",
    },
    {
      quote:
        "Dining here is a sensory journey. The Chef has bottled the soul of Agra on a plate of pure gold.",
      source: "Continental Culinary Journal",
      date: "Dec 2025",
    },
    {
      quote:
        "An oasis of stillness. The transition from the bustle of Agra to the lobby is like a deep breath.",
      source: "The Wanderer Magazine",
      date: "Nov 2025",
    },
    {
      quote:
        "Details matter here—from the hand-woven linens to the bespoke scent of the courtyard at dusk.",
      source: "Lifestyle & Heritage",
      date: "Feb 2026",
    },
    {
      quote:
        "Few places on earth manage to feel this grand yet this intimate. It is a home for the soul.",
      source: "Elite Voyager",
      date: "Sept 2025",
    },
    {
      quote:
        "The evening 'Aarti' ceremony on the terrace is a spiritual highlight that stays with you forever.",
      source: "Culture Today",
      date: "Jan 2026",
    },
    {
      quote:
        "Sustainability meets opulence. Their water conservation efforts in Agra are industry-leading.",
      source: "Green Luxury Report",
      date: "Mar 2026",
    },
    {
      quote:
        "The concierge team holds the keys to the city's best-kept secrets. Simply unparalleled.",
      source: "The Metropolitan",
      date: "Oct 2025",
    },
    {
      quote:
        "Waking up to the Taj Mahal emerging from the morning mist is an experience money can't usually buy.",
      source: "The Sunday Times Travel",
      date: "Dec 2025",
    },
  ];

  return (
    <main className="about-container">
      {/* SECTION 1: PARALLAX HERO */}
      <section className="about-hero">
        <div className="about-hero__overlay"></div>
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">A Century of Quiet Luxury</span>
          <h1 className="about-hero__title">Our Heritage</h1>
          <p className="about-hero__sub">
            Where timeless elegance meets the horizon.
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY */}
      <section className="our-story">
        <h2 className="story-main-heading">Our Story</h2>
        <div className="story-grid">
          {journey.map((item, index) => (
            <React.Fragment key={index}>
              <div className="story-left">
                <div className="photo-frame floating-shadow">
                  <div className="frame-inner">
                    <img
                      src={item.image}
                      alt={item.leader}
                      className="leader-img"
                    />
                  </div>
                  <div className="frame-label">
                    <span className="reign-year">
                      {item.year}: {item.reign}
                    </span>
                    <span className="reign-name">- {item.leader}</span>
                  </div>
                </div>
              </div>
              <div className="story-right">
                <div className="context-box">
                  <div className="context-header">
                    <span className="context-year">{item.year}</span>
                    <div className="context-dot"></div>
                    <h3 className="context-title">{item.title}</h3>
                  </div>
                  <p className="context-text">{item.content}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* SECTION 3: LOCATION */}
      <section className="about-location">
        <h2 className="location-main-title">Why the City of Taj?</h2>

        <div className="location-container">
          <div className="location-content">
            <div className="vision-quote">
              <p className="quote-text">
                "I didn't choose Agra for its history; I chose it for its
                silence at daybreak. The way the white marble of the Taj catches
                the first light—it is a lesson in perfection that our
                hospitality must mirror."
              </p>
              <span className="quote-author">-— The Founder's Journal</span>
            </div>
            <p className="location-description">
              Our founder insisted that every balcony must offer an unobstructed
              gaze at the eternal monument. Nestled just 600 meters from the
              gates, our location was chosen to ensure that the spirit of the
              Taj Mahal isn't just a view, but a constant, silent companion to
              your stay.
            </p>
          </div>

          <div className="location-visual">
            <div className="image-frame floating-shadow">
              <img
                src="https://www.oberoihotels.com/-/media/oberoi-hotel/amarvillas-resized/Amarvilas/experiences/experiences/desktop1024x706/balcony_dinner.jpg"
                alt="Taj View"
                className="taj-view-img"
              />
            </div>
            <div className="decorative-accent-box"></div>
          </div>
        </div>
      </section>

      {/*Global Feedback Section*/}
      <section className="about-press">
        <h2 className="press-main-heading">Global Perspectives</h2>

        <div className="sticky-notes-container">
          {reviews.map((item, index) => (
            <div key={index} className="sticky-note">
              <div className="note-pin"></div>
              <div className="note-content">
                <p className="note-quote">"{item.quote}"</p>
                <div className="note-footer">
                  <span className="note-source">{item.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Invitation Section*/}
      <section className="about-invitation">
        <div className="invitation-container">
          <div className="invitation-content">
            <h2 className="invitation-title">
              Your Journey Begins with a Single Night
            </h2>
            <p className="invitation-text">
              The Taj Mahal is most beautiful when shared with someone who
              understands its silence. Allow us to host your next chapter of
              memories in the city of kings.
            </p>

            <div className="invitation-actions">
              <button className="btn-book">Reserve Your Stay</button>
              <button className="btn-suites">Explore the Suites</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
