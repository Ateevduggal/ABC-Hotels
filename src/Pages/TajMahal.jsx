import React from "react";
import "./TajMahal.css";

const TajMahal = () => {
  const itineraryData = [
    {
      time: "05:30",
      title: "THE DAWN AWAKENING",
      loc: "Taj Mahal",
      desc: "Witness the ivory gates open as the morning mist rises from the Yamuna, painting the marble in shades of violet and gold.",
    },
    {
      time: "09:30",
      title: "THE CITADEL OF KINGS",
      loc: "Agra Fort",
      desc: "A private walkthrough of the red sandstone bastions where Emperors once stood overlooking their kingdom.",
    },
    {
      time: "13:00",
      title: "EPICUREAN HERITAGE",
      loc: "The Taj Restaurant",
      desc: "A sensory journey through the spices and secret recipes of the royal Mughal kitchens, served in a candlelit pavilion.",
    },
    {
      time: "15:00",
      title: "THE MARBLE JEWEL BOX",
      loc: "Baby Taj",
      desc: "Discover the Tomb of Itmad-ud-Daulah, featuring the delicate lattice-work and 'Parchin Kari' that paved the way for the Taj.",
    },
    {
      time: "17:00",
      title: "THE FORGOTTEN CAPITAL",
      loc: "Fatehpur Sikri",
      desc: "Strolling through the silent, perfectly preserved courtyards of Emperor Akbar's abandoned dream city.",
    },
    {
      time: "18:30",
      title: "THE GOLDEN REFLECTION",
      loc: "Mehtab Bagh",
      desc: "Watching the sun descend behind the Taj Mahal's silhouette from the Moonlight Garden across the river bank.",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1652448328499-05fd3da13f07?auto=format&fit=crop&q=80",
    "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607829_H5Ice2bA9tAEnrBOfn8VRfaFxjpEInEQ.jpg",
    "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_828/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/cswimmwwl5sarkahvjwo/MehtabBagh%E2%80%93BacksideViewoftheTajMahalwithOptionalGuide.jpg",
  ];

  const craftData = [
    {
      label: "Parchin Kari",
      title: "THE VOICES OF STONE",
      desc: "Experience the delicate art of marble inlay, where semi-precious stones like Lapis Lazuli and Malachite are hand-carved into floral motifs—a technique preserved by the same families who built the Taj Mahal.",
    },
    {
      label: "Zardozi",
      title: "THREADS OF THE EMPIRE",
      desc: "Observe the intricate gold and silver embroidery that once adorned the robes of Mughal royalty, now meticulously crafted into bespoke textile art.",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=387&auto=format&fit=crop",
    "https://images.stockcake.com/public/c/e/e/cee4bb29-057d-4040-b8a0-ce084388402a_large/bustling-market-street-stockcake.jpg",
    "https://www.tajmahaltourguide.com/blog/wp-content/uploads/2023/12/rajvansh-holidays-20.jpg",
    "https://www.tajmahal.gov.in/images/banners/pages/taj-view-point-mehtab-bagh.jpg",
    "https://plus.unsplash.com/premium_photo-1697730423778-918fd1dff289?q=80&w=991&auto=format&fit=crop",
    "https://images.pexels.com/photos/19195952/pexels-photo-19195952.jpeg",
    "https://as2.ftcdn.net/v2/jpg/02/73/58/01/1000_F_273580137_bJ1YTnHn93g05uDoNppqpkya4jPCaUa1.jpg",
    "https://images.unsplash.com/photo-1719904121044-c6f77feaa63f?q=80&w=870&auto=format&fit=crop",
    "https://images.pexels.com/photos/6264391/pexels-photo-6264391.jpeg",
    "https://t3.ftcdn.net/jpg/03/42/14/70/360_F_342147053_Ghmto2LsNVkXZXKw61raqfnaYlQW77zD.jpg",
    "https://optimatravels.com/images/agra-images/taj-mahal-night-view-from-mehtab-bag.jpg",
    "https://static2.tripoto.com/media/filter/nl/img/1795659/TripDocument/1573727065_1573726798_1573726697_1573725729_agra_at_night.jpg",
  ];

  return (
    <div className="taj-page-wrapper">
      {/* 1. HERO */}
      <section className="taj-hero-section">
        <div className="taj-hero-parallax-layer">
          <div className="taj-overlay"></div>
          <div className="taj-hero-content">
            <h1 className="taj-hero-title">The Monument of Love</h1>
          </div>
        </div>
      </section>

      {/* 2. HISTORY */}
      <section className="taj-history-section">
        <div className="taj-container taj-grid-2">
          {/* Left Column */}
          <div className="taj-history-content">
            <h2 className="taj-history-heading">
              A Legacy Carved <br /> in Moonlight
            </h2>
            <p className="taj-history-text">
              In 1632, a monumental vision drew the Mughal Empire’s finest
              artisans together for over two decades. More than 20,000
              stone-cutters, calligraphers, and master builders transformed
              pristine Makrana marble into a flawless study of
              symmetry—conceived as a terrestrial reflection of paradise.
            </p>

            <p className="taj-history-text">
              Recognized as one of the
              <strong> New Seven Wonders of the World </strong>, the Taj Mahal
              is revered not only for its beauty, but for its mathematical
              precision. Its perfect bilateral symmetry places every minaret and
              arch in exact harmony. An enduring masterpiece of sacred geometry,
              it appears to shift in tone—from blush at dawn to silver beneath
              the full moon.
            </p>
          </div>

          {/* Right Column */}
          <div className="taj-history-visual-wrapper">
            <div className="taj-image-frame">
              <img
                src="https://images.pexels.com/photos/34821969/pexels-photo-34821969.jpeg"
                alt="Taj Mahal Architectural Detail"
                className="taj-history-image"
              />
              {/* Decorative architectural border element */}
              <div className="taj-image-border-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEEDBACK */}
      <section className="taj-feedback-section">
        <div className="taj-container">
          <div className="taj-feedback-card">
            <p className="taj-quote">
              "I thought I knew what beauty looked like. Then I saw the Taj at 6
              AM. The marble doesn't just reflect light; it seems to glow from
              within, like a living thing."
            </p>
            <cite className="taj-author">— Eleanor Vance, Guest</cite>
          </div>
        </div>
      </section>

      {/* 4. ITINERARY */}
      <section className="iti-section">
        <div className="iti-container">
          <h2 className="iti-main-title">A Curated Chronicle</h2>
          <div className="iti-grid">
            <div className="iti-text-column">
              {itineraryData.map((item, index) => (
                <div key={index} className="iti-entry">
                  <div className="iti-axis">
                    <span className="iti-time">{item.time}</span>
                    <div className="iti-line"></div>
                  </div>
                  <div className="iti-content">
                    <h3 className="iti-step-title">{item.title}</h3>
                    <p className="iti-location">{item.loc}</p>
                    <p className="iti-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="iti-image-column">
              <div className="iti-stack">
                {images.map((img, i) => (
                  <div key={i} className={`iti-frame iti-frame-${i + 1}`}>
                    <img src={img} alt="Agra Experience" className="iti-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOMENTS OF AWW */}
      <section className="legacy-section">
        <div className="legacy-container">
          {/* Centered Header */}
          <header className="legacy-header">
            <h2 className="legacy-main-title">The Artisan’s Legacy</h2>
          </header>

          <div className="legacy-grid">
            {/* Static Image with Architectural Framing */}
            <div className="legacy-visual-wrapper">
              <div className="legacy-image-frame">
                <img
                  src="https://plus.unsplash.com/premium_photo-1677621678886-f16c7b96779c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Marble Inlay Artisans"
                  className="legacy-main-image"
                />
                <div className="legacy-border-accent"></div>
              </div>
            </div>

            {/* Dynamic Content Mapping */}
            <div className="legacy-content-stack">
              {craftData.map((item, index) => (
                <div key={index} className="legacy-item">
                  <span className="legacy-item-label">{item.label}</span>
                  <h3 className="legacy-item-title">{item.title}</h3>
                  <p className="legacy-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALLERY */}
      <section className="sq-gal-section">
        <div className="sq-gal-container">
          <header className="sq-gal-header">
            <h2 className="sq-gal-title">Visions of Agra</h2>
          </header>

          <div className="sq-gal-grid">
            {gallery.map((src, index) => (
              <div key={index} className="sq-gal-item">
                <div className="sq-gal-image-box">
                  <img
                    src={src}
                    alt={`Agra vista ${index + 1}`}
                    className="sq-gal-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TajMahal;
