import React from "react";
import "./Sadar.css";

const Sadar = () => {
  return (
    <div className="sadar-page-wrapper">
      {/* SECTION 1: HERO */}
      <header className="sadar-hero">
        <div className="sadar-hero-overlay"></div>
        <div className="sadar-hero-content">
          <h1 className="sadar-hero-title">Discover Sadar Bazar</h1>
          <p className="sadar-hero-subtitle">
            Agra’s Heart of Timeless Commerce
          </p>
        </div>
      </header>

      {/* SECTION 2: LEGACY (3rem Padding) - Text Left, Image Right */}
      <section className="sadar-legacy">
        <div className="sadar-container">
          <div className="sadar-text-box">
            <h2 className="sadar-heading">A Legacy of Trade and Tradition</h2>
            <p className="sadar-paragraph">
              Just moments away from the elegance of our hotel lies Sadar Bazar,
              one of Agra’s most iconic marketplaces. A visit here offers guests
              an authentic glimpse into the city’s vibrant commercial heart—rich
              in tradition, color, and character.
            </p>
            <p className="sadar-paragraph">
              Sadar Bazar is among the oldest trading districts in the region,
              reflecting the spirit of Agra where heritage and craftsmanship
              continue to thrive. Walking through its lanes is like stepping
              into a living chapter of the city’s history.
            </p>
          </div>
          <div className="sadar-image-legacy"></div>
        </div>
      </section>

      {/* SECTION 3: SHOPPING (2rem Padding) - Image Left, Text Right */}
      <section className="sadar-shopping">
        <div className="sadar-container-reverse">
          <div className="sadar-text-box">
            <h2 className="sadar-heading">An Unmatched Experience</h2>
            <p className="sadar-paragraph">
              Renowned for its sheer scale, Sadar Bazar is a treasure trove for
              discerning shoppers. From world-famous Agra leather and hand-woven
              textiles to intricate marble inlay work, the market offers goods
              that capture the essence of Indian artistry.
            </p>
            <p className="sadar-paragraph">
              Beyond retail charm, it functions as a cornerstone of the region's
              commerce. The dynamic flow of trade—from everyday utilities to
              festive décor—adds to the market’s unique energy and authenticity.
            </p>
          </div>
          <div className="sadar-image-shopping"></div>
        </div>
      </section>

      {/* SECTION 4: DISCOVERY (3rem Padding) - Text Left, Image Right */}
      <section className="sadar-discovery">
        <div className="sadar-editorial-grid">
          <div className="sadar-editorial-text">
            <h2 className="sadar-heading">Lanes of Specialization</h2>
            <p className="sadar-paragraph">
              Sadar Bazar is a collection of specialized streets, each known for
              distinct products—kitchenware, seasonal goods, or the city's
              signature leather exports. Exploring these lanes offers guests
              insight into how traditional markets remain meticulously
              organized.
            </p>
            <p className="sadar-paragraph">
              This cultural immersion captures the true essence of Agra—raw,
              energetic, and unforgettable. The calls of vendors and the
              movement of goods create an atmosphere that stays with you long
              after you leave.
            </p>
          </div>
          <div className="sadar-editorial-image"></div>
        </div>
      </section>

      {/* SECTION 5: FLAVOURS (2rem Padding) - Centered */}
      <section className="sadar-flavours">
        <div className="sadar-flavour-card">
          <h2 className="sadar-heading">A Taste of Local Flavours</h2>
          <p className="sadar-paragraph">
            The market experience is incomplete without sampling the famed
            street food. From the iconic Agra Petha to savory quick snacks, the
            aromas found around the bazaar provide an irresistible culinary
            interlude during your exploration.
          </p>
          <p className="sadar-paragraph">
            Our concierge can curate a private tasting tour, ensuring you
            experience the safest and most celebrated flavors of the district
            before returning to our tranquil spaces for a refined evening.
          </p>
        </div>
      </section>

      {/* SECTION 6: TRANSITION (3rem Padding) - Dark CTA */}
      <section className="sadar-transition">
        <div className="sadar-footer-content">
          <h2 className="sadar-heading-light">Seamless Comfort</h2>
          <p className="sadar-paragraph-light">
            After immersing yourself in the lively streets of Sadar Bazar,
            return to the serenity of our hotel—where refined luxury and
            personalized service offer the perfect contrast to the city’s
            vibrant pulse.
          </p>
          <p className="sadar-paragraph-light">
            Reconnect with peace in our spa or enjoy a quiet tea overlooking the
            city skyline, reflecting on the day's discoveries in the heart of
            Agra.
          </p>
          <button className="sadar-action-btn">Plan Your Visit</button>
        </div>
      </section>
    </div>
  );
};

export default Sadar;
