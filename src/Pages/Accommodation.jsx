import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Leaf,
  Palmtree,
  ConciergeBell,
  UtensilsCrossed,
  Moon,
  Waves,
  Dumbbell,
} from "lucide-react";
import "./Accommodation.css";

const roomDetails = [
  {
    name: "Deluxe Rooms",

    intro:
      "A thoughtfully designed sanctuary where comfort, calm, and subtle luxury come together to create a restorative stay.",

    amenities: [
      "Handcrafted king or twin bedding with curated linens",

      "Climate-controlled interiors with layered lighting",

      "Sound-insulated walls for uninterrupted rest",
    ],

    spatial:
      "Warm, balanced, and inviting — the space feels composed and quietly reassuring from the moment you arrive.",

    ideal:
      "Guests seeking refined comfort and a peaceful retreat after a day of exploration.",

    rate: "$500",

    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",

    specs: {
      size: "450 SQ. FT",

      view: "Garden",

      bed: "King or Twin",

      livingSpace: "Sleeping area with seating",

      bathroom: "Rain shower",

      occupancy: "2 ADULTS",

      service: "Standard",

      distinction: "Sound Insulation",
    },
  },

  {
    name: "Premier Rooms",

    intro:
      "An elevated living space offering enhanced views and refined details that reflect the character of its surroundings.",

    amenities: [
      "Expansive windows framing city, garden, or landmark views",

      "Lounge seating designed for relaxation and reflection",

      "Enhanced bath amenities with premium finishes",
    ],

    spatial:
      "Open and light-filled, the room feels expansive yet personal, designed to connect you effortlessly with the view beyond.",

    ideal:
      "Guests who value perspective, light, and a sense of place within their stay.",

    rate: "$579",

    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",

    specs: {
      size: "550 SQ. FT",

      view: "LANDMARK VIEW",

      bed: "King",

      livingSpace: "Sleeping area with lounge seating",

      bathroom: "Shower with soaking tub",

      occupancy: "2 ADULTS",

      service: "Standard",

      distinction: "Enhanced Bath",
    },
  },

  {
    name: "Junior Suites",

    intro:
      "A graceful transition between room and suite, offering added space and a sense of relaxed indulgence.",

    amenities: [
      "Semi-separated living and sleeping areas",

      "Comfortable lounge seating",

      "Generous wardrobe and storage spaces",
    ],

    spatial:
      "Fluid and adaptable, the suite feels open and relaxed — ideal for unwinding or spending unhurried time indoors.",

    ideal:
      "Couples, longer stays, or guests who appreciate extra room to settle in comfortably.",

    rate: "$645",

    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974",

    specs: {
      size: "750 SQ. FT",

      view: "Panoramic outlooks",

      bed: "King",

      livingSpace: "Semi-separate living area",

      bathroom: "Marble bathroom with tub",

      occupancy: "2 ADULTS",

      service: "Priority",

      distinction: "Semi-Private Lounge",
    },
  },

  {
    name: "Executive Suites",

    intro:
      "A private residence within the hotel, designed to offer space, discretion, and effortless sophistication.",

    amenities: [
      "Separate living and sleeping rooms",

      "Dedicated dining or work lounge",

      "Enhanced in-suite services",
    ],

    spatial:
      "Composed and expansive, the suite balances openness with privacy, adapting naturally to both leisure and business needs.",

    ideal:
      "Extended stays, business travelers, and guests who prioritize space and privacy.",

    rate: "$700",

    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974",

    specs: {
      size: "950 SQ. FT",

      view: "Premium outlook",

      bed: "King",

      livingSpace: "Separate living and sleeping rooms",

      bathroom: "Premium marble bath",

      occupancy: "3 ADULTS",

      service: "Private Butler",

      distinction: "Dining Lounge",
    },
  },

  {
    name: "Signature Suites",

    intro:
      "The most exclusive expression of luxury at ABC Hotel, where every detail is curated for distinction and serenity.",

    amenities: [
      "Expansive living and dining areas",

      "Premium bathing rituals and soaking tubs",

      "Personalized in-suite attention",
    ],

    spatial:
      "Grand yet restrained, the space conveys quiet confidence, timeless elegance, and complete seclusion.",

    ideal:
      "Distinguished guests, private celebrations, and those accustomed to the highest level of refinement.",

    rate: "$815",

    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",

    specs: {
      size: "1400 SQ. FT",

      view: "Iconic landmark view",

      bed: "King (custom bedding)",

      livingSpace: "Multiple living and dining areas",

      bathroom: "Signature bath rituals with soaking tub",

      occupancy: "4 ADULTS",

      service: "Elite Concierge",

      distinction: "Bath Rituals",
    },
  },
];

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1661962404533-33400e6bc094",
  "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
  "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
  "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg",
  "https://images.pexels.com/photos/8082235/pexels-photo-8082235.jpeg",
];

const hotelAmenities = [
  {
    name: "Signature Spa",
    description:
      "A tranquil wellness sanctuary offering personalized therapies, mindful rituals, and restorative experiences.",
    icon: <Sparkles size={32} strokeWidth={3} />,
  },
  {
    name: "Botanical Garden",
    description:
      "Curated landscapes and lush greenery designed for serene walks and moments of quiet connection with nature.",
    icon: <Leaf size={32} strokeWidth={3} />,
  },
  {
    name: "Artisan Spaces",
    description:
      "Thoughtfully crafted public areas that celebrate design, local artistry, and timeless architectural details.",
    icon: <Palmtree size={32} strokeWidth={3} />,
  },
  {
    name: "Elite Concierge",
    description:
      "Dedicated service professionals offering seamless assistance, bespoke arrangements, and local insights.",
    icon: <ConciergeBell size={32} strokeWidth={3} />,
  },
  {
    name: "Private Dining",
    description:
      "Exclusive dining environments designed for intimate gatherings, celebrations, and curated culinary journeys.",
    icon: <UtensilsCrossed size={32} strokeWidth={3} />,
  },
  {
    name: "Reflection Areas",
    description:
      "Quiet, contemplative spaces designed for reading, meditation, and uninterrupted moments of stillness.",
    icon: <Moon size={32} strokeWidth={3} />,
  },
  {
    name: "Infinity Pool",
    description:
      "An elegant pool experience with panoramic views, private loungers, and an atmosphere of effortless calm.",
    icon: <Waves size={32} strokeWidth={3} />,
  },
  {
    name: "Fitness Studio",
    description:
      "A modern wellness space equipped for strength, balance, and guided movement sessions.",
    icon: <Dumbbell size={32} strokeWidth={3} />,
  },
];

const specKeys = Object.keys(roomDetails[0].specs);

const Accommodation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="accommodation-page">
      {/* 1. HERO SECTION*/}
      <section className="acco-hero-parallax">
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="hero-text-center"
          >
            <span className="heritage-badge">The Heritage Collection</span>
            <h1 className="hero-title">Sanctuary of the Soul</h1>
            <div className="accent-line"></div>
          </motion.div>
        </div>

        {/* The architectural "bottom design" from earlier can still sit here */}
        <div className="hero-bottom-cutout">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M1200 120L0 120 300 0 600 120 900 0 1200 120z"
              fill="#FCFBF7"
            ></path>
          </svg>
        </div>
      </section>

      {/* 2. STAGGERED ROOM COLLECTION */}
      <section className="room-collection">
        {roomDetails.map((room, index) => (
          <div
            key={index}
            className={`room-entry ${index % 2 !== 0 ? "rev" : ""}`}
          >
            {/* Image Side with Risen Shadow Effect */}
            <div className="room-img-wrapper">
              <img src={room.img} alt={room.name} />
            </div>

            {/* Content Side */}
            <div className="room-details-wrapper">
              {/* Title with Text Shadow */}
              <h2 className="acco-title-font elevated-title">{room.name}</h2>
              <p className="poetic-text">{room.intro}</p>

              <div className="room-data-grid">
                <div className="data-column">
                  <h4 className="data-label">Signature Amenities</h4>
                  <ul className="data-list">
                    {room.amenities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="data-column border-left">
                  <h4 className="data-label">Spatial Character</h4>
                  <p className="data-text">{room.spatial}</p>
                </div>
              </div>

              {/* Action Footer with Rising Button */}
              <div className="room-entry-footer">
                <div className="rate-container">
                  <span className="rate-prefix">Starting from</span>
                  <span className="rate-amount">
                    {room.rate} <small>/ Night</small>
                  </span>
                </div>
                <button className="book-btn transition-lift">
                  Explore & Inquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. GLOBAL AMENITIES (PARALLAX) */}
      <section className="parallax-minimal-section">
        <div className="parallax-bg-fixed">
          <div className="black-overlay-deep">
            <div className="amenities-content-grid">
              <header className="amenities-static-header">
                <h2 className="static-display-title">Hotel Facilities</h2>
              </header>

              <div className="static-4x2-grid">
                {hotelAmenities.map((item, index) => (
                  <div key={index} className="static-amenity-cell">
                    <div className="static-icon-white">{item.icon}</div>
                    <h3 className="static-name-white">{item.name}</h3>
                    <p className="static-desc-white">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="comparison-table-section">
        <div className="table-container">
          <h2 className="table-title">Technical Specifications</h2>

          <div className="table-responsive-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="sticky-col">Features</th>
                  {roomDetails.map((room, index) => (
                    <th key={index}>{room.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Mapping through each spec detail (Size, View, etc.) */}
                {specKeys.map((key) => (
                  <tr key={key}>
                    <td className="spec-label sticky-col">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </td>
                    {roomDetails.map((room, index) => (
                      <td key={index}>{room.specs[key]}</td>
                    ))}
                  </tr>
                ))}

                {/* Adding the 'Ideal For' row at the bottom */}
                <tr className="ideal-row">
                  <td className="spec-label sticky-col">Ideal For</td>
                  {roomDetails.map((room, index) => (
                    <td key={index} className="ideal-text">
                      {room.ideal}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. HERO GALLERY SLIDESHOW */}
      <section className="acco-gallery">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={galleryImages[currentSlide]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="gallery-slide-img"
          />
        </AnimatePresence>
        <div className="gallery-caption">The Aesthetic of ABC Hotels</div>
      </section>
    </div>
  );
};

export default Accommodation;
