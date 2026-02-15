import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      title: "The Pinnacle of Luxury",
    },
    {
      img: "https://images.pexels.com/photos/34636887/pexels-photo-34636887.jpeg",
      title: "Seamless Elegance in Every Detail",
    },
    {
      img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7",
      title: "Serenity by the Azure",
    },
  ];

  const galleryImages = [
    { id: 1, src: "/gallery/city.webp", alt: "The City" },
    { id: 2, src: "/gallery/lobby.webp", alt: "Lobby Interior" },
    { id: 3, src: "/gallery/dining.webp", alt: "Restaurant Dining" },
    { id: 4, src: "/gallery/bar.webp", alt: "Executive Bar" },
    { id: 5, src: "/gallery/pool.webp", alt: "Swimming Pool" },
    { id: 6, src: "/gallery/room.webp", alt: "Luxury Room" },
    { id: 7, src: "/gallery/social.webp", alt: "Social Spaces" },
    { id: 8, src: "/gallery/fitness.webp", alt: "Fitness Center" },
    { id: 9, src: "/gallery/lounge.webp", alt: "Executive Lounge" },
    { id: 10, src: "/gallery/luxury.webp", alt: "Luxury Space" },
    { id: 11, src: "/gallery/garden.webp", alt: "Garden Area" },
    { id: 12, src: "/gallery/view.webp", alt: "Amazing View" },
    { id: 13, src: "/gallery/activities.webp", alt: "Activities" },
  ];

  const roomCollection = [
    {
      title: "The Diamond Avenue",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=870&auto=format&fit=crop",
      description:
        "Perched at the highest point of our estate, this suite is a glass-walled sanctuary. It is designed for those who seek absolute privacy and a perspective above the world.",
      view: "Breathtaking 270° views of the Taj Mahal and the winding Yamuna River.",
      features: [
        "Private Rooftop Infinity Pool",
        "In-Suite Butler Pantry",
        "Italian Marble Bath",
      ],
    },
    {
      title: "The Deluxe Suite",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=870&auto=format&fit=crop",
      description:
        "A masterclass in regal comfort. Drawing inspiration from Mughal symmetry, this suite offers a grounded, earthy palette paired with modern smart-home technology.",
      view: "Overlooks the lush inner courtyards and the lit marble fountains.",
      features: [
        "Custom King-Size Bed",
        "Smart Privacy Glass",
        "Artisan Teak Furnishings",
      ],
    },
    {
      title: "The Heritage Clan Suite",
      img: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=774&auto=format&fit=crop",
      description:
        "Luxury is best shared. This expansive three-bedroom suite allows a family of six to remain connected in a grand communal hall while enjoying total individual privacy.",
      view: "Dual-aspect views overlooking the historic city gardens.",
      features: [
        "Communal Dining Table",
        "Dedicated Kids' Play-Nook",
        "Triple En-suite Bathrooms",
      ],
    },
  ];

  const guestReviews = [
    {
      id: 1,
      star: 5,
      name: "Emma Johnson",
      review:
        "Absolutely outstanding stay! The staff anticipated every need, the room was immaculate, and breakfast felt gourmet.",
    },
    {
      id: 2,
      star: 5,
      name: "Rajesh Kumar",
      review:
        "The pinnacle of Agra hospitality. The view of the Taj from our balcony was life-changing.",
    },
    {
      id: 3,
      star: 5,
      name: "Sophia Lee",
      review:
        "Flawless stay. The concierge planned an amazing city tour for us.",
    },
    {
      id: 4,
      star: 5,
      name: "Ahmed Al-Farooqi",
      review:
        "Luxurious rooms, breathtaking views, and the best breakfast buffet I’ve ever had.",
    },
  ];

  const nearbyPlaces = [
    {
      id: 1,
      place: "Taj Mahal",
      distance: "3.2 km",
      rating: 4.9,
      type: "Iconic Landmark",
    },
    {
      id: 2,
      place: "Agra Fort",
      distance: "2.5 km",
      rating: 4.7,
      type: "UNESCO Site",
    },
    {
      id: 3,
      place: "Sadar Bazar",
      distance: "1.8 km",
      rating: 4.5,
      type: "Luxury Shopping",
    },
    {
      id: 4,
      place: "Mehtab Bagh",
      distance: "4.0 km",
      rating: 4.8,
      type: "Sunset Viewpoint",
    },
  ];

  const globalRatings = [
    {
      platform: "Tripadvisor",
      stars: 5,
      count: "200 Reviews",
      score: "4.0",
      link: "#",
    },
    {
      platform: "Google",
      stars: 5,
      count: "300 Reviews",
      score: "4.4",
      link: "#",
    },
    {
      platform: "Booking.com",
      stars: 5,
      count: "150 Reviews",
      score: "9.2",
      link: "#",
    },
    {
      platform: "Expedia",
      stars: 4,
      count: "85 Reviews",
      score: "4.6",
      link: "#",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="app-container">
      {/* Hero Slider */}
      <section
        id="home"
        className="hero"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide}
            className="slide"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              x: {
                type: "tween",
                duration: 1.8,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(
        rgba(0,0,0,0.4),
        rgba(0,0,0,0.4)
      ), url(${slides[currentSlide].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-text"
            >
              <h1>{slides[currentSlide].title}</h1>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Global Ratings */}
      <section className="ratings-bar">
        <div className="ratings-wrapper">
          {globalRatings.map((rating, index) => (
            <div key={index} className="rating-card">
              <div className="rating-top">
                <span className="rating-score">{rating.score}</span>
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={
                        i < rating.stars
                          ? "var(--theme-primary)"
                          : "transparent"
                      }
                      color="var(--theme-primary)"
                    />
                  ))}
                </div>
              </div>
              <div className="rating-info">
                <h4>{rating.platform}</h4>
                <p>{rating.count}</p>
              </div>
              <a href={rating.link} className="rating-external-link">
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Philosophy */}
      <section id="about" className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-text-content">
            <h2 className="philosophy-main-heading">
              Heritage <br /> Redefined.
            </h2>

            <div className="story-block">
              <p className="highlight-p">
                Experience the rare privilege of staying in Agra’s most
                exclusive residential corridor, where the majesty of the Taj
                Mahal is your constant companion.
              </p>
              <p>
                Situated in the city’s most distinguished enclave, we offer the
                unique luxury of walking to India’s most iconic monument within
                minutes, while high-end artisan markets wait just beyond our
                gates.
              </p>
              <p>
                We believe nature is the ultimate luxury. Our property is a
                verdant oasis, where lush gardens and ancient canopies provide a
                cool refuge from the Agra sun — a place where contemporary
                elegance meets organic comfort.
              </p>
              <button className="cta-btn secondary-btn">
                Discover Our Story
              </button>
            </div>
          </div>

          <div className="philosophy-visuals">
            <div className="image-stack-large">
              <img
                src="https://plus.unsplash.com/premium_photo-1661928260943-4aa36c5e1acc?fm=jpg&q=60&w=3000"
                alt="Hotel Front"
                className="main-img"
              />
            </div>
            <div className="image-stack-small left">
              <img
                src="https://images.unsplash.com/photo-1743018695410-806c64a3683d?q=80&w=387&auto=format&fit=crop"
                alt="Luxury Detail"
                className="accent-img"
              />
            </div>
            <div className="image-stack-small right-bottom">
              <img
                src="https://images.unsplash.com/photo-1677190360803-5fee174054c0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Architecture Detail"
                className="accent-img"
              />
            </div>
            <div className="philosophy-bg-shape"></div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="classic-banner">
        <div className="banner-bg"></div>
        <div className="banner-content">
          <h2>Legacy of Elegance</h2>
          <p>Defined by Service, Inspired by You</p>
        </div>
      </section>

      {/* Room Showcase */}
      <section id="rooms" className="rooms-showcase">
        {roomCollection.map((room, index) => (
          <div
            key={index}
            className={`room-block ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="room-visual">
              <img
                src={room.img}
                alt={room.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="room-info">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-text">{room.description}</p>
              <div className="room-meta">
                <div className="meta-group">
                  <span className="meta-label">The View</span>
                  <p className="meta-value">{room.view}</p>
                </div>
                <div className="meta-group">
                  <span className="meta-label">Key Amenities</span>
                  <ul className="meta-list">
                    {room.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="cta-btn room-btn">Reserve Suite</button>
            </div>
          </div>
        ))}
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Beautiful Spaces
        </motion.h2>
        <div className="honeycomb-container">
          {/* Row 1: First 4 Images */}

          <div className="honeycomb-row">
            {galleryImages.slice(0, 4).map((image) => (
              <motion.div
                key={image.id}
                className="hexagon"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="230"
                />

                <div className="hexagon-overlay">
                  <span>{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Middle 5 Images */}

          <div className="honeycomb-row">
            {galleryImages.slice(4, 9).map((image) => (
              <motion.div
                key={image.id}
                className="hexagon"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="230"
                />

                <div className="hexagon-overlay">
                  <span>{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: Last 4 Images */}

          <div className="honeycomb-row">
            {galleryImages.slice(9, 13).map((image) => (
              <motion.div
                key={image.id}
                className="hexagon"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="230"
                />

                <div className="hexagon-overlay">
                  <span>{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Feedback */}
      <section className="reviews-parallax">
        <div className="parallax-bg-overlay"></div>
        <div className="reviews-content">
          <h2 className="reviews-title">Voices of Excellence</h2>
          <div className="reviews-ticker-container">
            <motion.div
              className="reviews-track"
              animate={{ x: [0, -1500] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...guestReviews, ...guestReviews].map((item, index) => (
                <div key={index} className="review-glass-card">
                  <div className="stars">{"★".repeat(item.star)}</div>
                  <p className="review-text">"{item.review}"</p>
                  <h4 className="guest-name">— {item.name}</h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="location-section">
        <div className="location-grid">
          <div className="location-info">
            <h4 className="label">Prime Location</h4>
            <h2 className="location-title">Pratap Nagar, Agra</h2>
            <p className="address-detail">
              <strong>ABC Luxury Hotels</strong>
              <br />
              Elite Plaza, Sector 4, Pratap Nagar, Agra, UP 282010
            </p>
            <div className="nearby-list">
              {nearbyPlaces.map((item) => (
                <div key={item.id} className="place-item">
                  <div className="place-meta">
                    <span className="place-name">{item.place}</span>
                    <span className="place-type">{item.type}</span>
                  </div>
                  <div className="place-stats">
                    <span className="dist">{item.distance}</span>
                    <span className="rating">★ {item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="map-wrapper">
            <div className="map-container">
              <iframe
                title="Hotel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400553067303!2d78.03995357614486!3d27.175001050210344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="custom-marker">
                <div className="marker-label">WE ARE HERE</div>
                <div className="marker-pin"></div>
                <div className="marker-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
