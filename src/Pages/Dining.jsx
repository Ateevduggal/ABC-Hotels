import React, { useState } from "react";
import {
  Star,
  Utensils,
  Coffee,
  Sun,
  Cake,
  GlassWater,
  Pizza,
} from "lucide-react";
import "./Dining.css";
import { menuData } from "../Components/MenuData";

const DiningPage = () => {
  const [activeCategory, setActiveCategory] = useState("Dinner");

  const categories = [
    { id: "Breakfast", icon: <Coffee size={18} /> },
    { id: "Lunch", icon: <Sun size={18} /> },
    { id: "Dinner", icon: <Utensils size={18} /> },
    { id: "Snacks", icon: <Pizza size={18} /> },
    { id: "Sweets", icon: <Cake size={18} /> },
    { id: "Beverages", icon: <GlassWater size={18} /> },
  ];

  const bestExperiences = {
    heading: "Best Experiences",
    desc: "Moments our guests still talk about",
    experiences: [
      {
        name: "Candlelight Taj View Dinner",
        experience:
          "“When the Taj slowly lit up after sunset and the candles were brought to the table, we both stopped talking for a moment. It felt unreal — like time had paused just for us..”",
        image:
          "https://www.oberoihotels.com/-/media/oberoi-hotel/amarvillas-resized/Amarvilas/experiences/experiences/desktop1024x706/balcony_dinner.jpg",
        attribution: "Ananya Mehra, Anniversary Guest",
      },
      {
        name: "Chef’s Seasonal Tasting Table",
        experience:
          "“Each course arrived like a story. The chef explained why it existed, where the ingredients came from, and how the dish should be experienced. It felt deeply personal.”",
        image:
          "https://images.stockcake.com/public/8/9/f/89ff01b8-f709-4f0a-8648-8168fc0fe03b_large/chef-tastes-dish-stockcake.jpg",
        attribution: "Daniel Foster, Culinary Traveller, UK",
      },
      {
        name: "Private Garden Brunch",
        experience:
          "“Breakfast in the garden with birds, soft sunlight, and no sense of hurry. It didn’t feel like a hotel — it felt like a private estate.”",
        image:
          "https://images.ctfassets.net/9q9nf0ar8wu3/2iKRCPMOYUdnpcAbX3ccXg/c031ce6eacc8f612900035fcc56c79bd/090324_glen-mills-cafe-hero.jpg?w=1300&q=80&fm=webp",
        attribution: "Riya & Kunal Shah, Leisure Guests",
      },
    ],
  };

  const diningSchedule = [
    {
      service: "Breakfast",
      hours: "07:00 – 10:30",
      startHour: 7,
      endHour: 10,
      slots: [
        {
          time: "07:00 – 08:00",
          status: "Available",
          view: "Morning garden light",
        },
        { time: "08:00 – 09:00", status: "Unavailable" },
        {
          time: "09:00 – 10:00",
          status: "Available",
          view: "Soft botanical shadows",
        },
      ],
    },
    {
      service: "Lunch",
      hours: "12:30 – 15:30",
      startHour: 12,
      endHour: 15,
      slots: [
        {
          time: "12:30 – 13:30",
          status: "Available",
          view: "Midday filtered sunlight",
        },
        { time: "13:30 – 14:30", status: "Unavailable" },
        {
          time: "14:30 – 15:30",
          status: "Available",
          view: "Poolside reflections",
        },
      ],
    },
    {
      service: "Dinner",
      hours: "19:00 – 23:00",
      startHour: 19,
      endHour: 23,
      slots: [
        {
          time: "19:00 – 20:00",
          status: "Available",
        },
        {
          time: "20:00 – 21:00",
          status: "Available",
          view: "Candlelit silhouettes",
        },
        { time: "21:00 – 22:00", status: "Unavailable" },
        {
          time: "22:00 – 23:00",
          status: "Available",
          view: "Evening Taj illumination",
        },
      ],
    },
  ];

  const filteredMenu = menuData.filter(
    (item) => item.category === activeCategory,
  );

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date()); // For month navigation

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const currentHour = new Date().getHours();

  // Calendar Logic
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1,
  ).getDay();

  const handlePrevMonth = () => {
    // Constraint: No going back from Jan 2026
    if (viewDate.getMonth() === 0 && viewDate.getFullYear() === 2026) return;
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  return (
    <div className="dining-page">
      {/* HERO SECTION */}
      <section className="dining-hero">
        <div
          className="hero-parallax-bg"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/17748656/pexels-photo-17748656.jpeg')`,
          }}
        >
          <div className="hero-overlay-dark">
            <div className="hero-content">
              <span className="hero-sub">Epicurean Journey</span>
              <h1 className="hero-title">Culinary Artistry</h1>
              <p className="hero-tagline">
                "Where timeless recipes meet global finesse, moments away from
                the Taj."
              </p>
              <button className="book-btn transition-lift">
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="chef-section">
        <div className="chef-container">
          <div className="chef-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Executive Chef"
            />
            <div className="chef-experience-badge">20+ Years Excellence</div>
          </div>
          <div className="chef-bio">
            <p className="chef-intro-highlight">
              Our Executive Chef, Arjan Singh, brings over two decades of
              experience from Michelin-starred kitchens across the globe to the
              heart of Agra. His philosophy revolves around honoring the soul of
              the ingredient while pushing the boundaries of contemporary
              presentation.
            </p>
            <p className="chef-p">
              Having mastered both the traditional hearths of India and the
              refined techniques of Europe, Chef Singh creates a bridge between
              cultures. Every plate is a deliberate composition of texture,
              temperature, and local terroir.
            </p>
            <p className="chef-p">
              Under his leadership, the kitchen operates with a focus on
              artisanal sourcing and seasonal integrity, ensuring that every
              guest experiences the vibrant culinary landscape of India in its
              most sophisticated form.
            </p>
            <div className="chef-signature">Chef Arjan Singh</div>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="menu-discovery">
        <div className="menu-header">
          <h2 className="menu-title">Our Signature Dishes</h2>
        </div>

        <div className="category-scroller">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="cat-icon-wrap">{cat.icon}</span>
              <span>{cat.id}</span>
            </button>
          ))}
        </div>

        {/* Changed to a specific 3-column grid class */}
        <div className="dish-grid-three">
          {filteredMenu.map((dish, index) => (
            <div key={dish.id} className="dish-card-premium">
              <div className="dish-visuals">
                <img src={dish.img} alt={dish.name} />

                {/* Floating Rating Tag - Refined for luxury look */}
                <div className="rating-tag">
                  <Star size={12} fill="currentColor" />
                  <span>{dish.rating}</span>
                </div>

                {/* Sliding Modal - Now using var(--accent) for alternating logic */}
                <div
                  className={`sliding-modal ${
                    index % 2 === 0 ? "bg-primary" : "bg-accent"
                  }`}
                >
                  <div className="modal-inner">
                    <Utensils size={30} strokeWidth={1} />
                    <h4>Chef's Notes</h4>
                    <p>{dish.description}</p>
                    <div className="modal-divider"></div>
                    <span className="swipe-indicator">Premium Selection</span>
                  </div>
                </div>
              </div>

              <div className="dish-info-new">
                <div className="dish-title-row">
                  <h3 className="dish-name-alt">{dish.name}</h3>
                  <div className="dish-line"></div>
                </div>
                <div className="dish-meta">
                  <span className="dish-type">{dish.category} Exclusive</span>
                  <span className="dish-price">Signature</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Banner without image*/}
      <section className="concierge-banner">
        <div className="concierge-content">
          <h3 className="concierge-text">
            Have a specific dietary requirement or a unique proposal idea? Our
            Culinary Concierge is available to tailor your evening to the finest
            detail.
          </h3>
          <button className="concierge-cta">Inquire Now</button>
        </div>
      </section>

      {/*Parallax Experiences*/}
      <section>
        <div className="parallax-container">
          {bestExperiences.experiences.map((item, index) => (
            <div key={index} className="parallax-item">
              {/* Full-width Parallax Image Section */}
              <div
                className="parallax-bg"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>

              {/* Alternating Rectangle Content Box */}
              <div
                className={`content-card ${
                  index % 2 === 0 ? "bg-primary left" : "bg-accent right"
                }`}
              >
                <h3 className="card-name">{item.name}</h3>
                <p className="card-experience">{item.experience}</p>
                <p className="card-attribution">— {item.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Booking Status*/}
      <section className="concierge-panel-section">
        <div className="concierge-container">
          {/* LEFT: Dining Accordions */}
          <div className="concierge-left">
            {diningSchedule.map((service, idx) => {
              const isTodaySelected = isSameDay(selectedDate, today);
              const isPast = isTodaySelected && currentHour >= service.endHour;

              return (
                <details
                  key={idx}
                  className={`concierge-accordion ${isPast ? "concluded" : ""}`}
                  open={!isPast}
                >
                  <summary>
                    <div className="summary-info">
                      <span className="service-label">{service.service}</span>
                      <span className="service-time-range">
                        {service.hours}
                      </span>
                    </div>
                    {isPast && <span className="concluded-tag">Concluded</span>}
                  </summary>
                  <div className="accordion-content">
                    {service.slots.map((slot, sIdx) => (
                      <div
                        key={sIdx}
                        className={`slot-ledger-row ${slot.status.toLowerCase()}`}
                      >
                        <span className="ledger-time">{slot.time}</span>
                        <div className="ledger-status-box">
                          <span className="ledger-status-text">
                            {slot.status}
                          </span>
                          {slot.view && (
                            <span className="ledger-view-text">
                              — {slot.view}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>

          {/* RIGHT: Sophisticated Calendar */}
          <div className="concierge-right">
            <div className="calendar-card">
              <div className="calendar-header">
                <button onClick={handlePrevMonth} className="cal-nav-btn">
                  &lsaquo;
                </button>
                <h4 className="cal-month-title">
                  {viewDate.toLocaleString("default", { month: "long" })}{" "}
                  {viewDate.getFullYear()}
                </h4>
                <button onClick={handleNextMonth} className="cal-nav-btn">
                  &rsaquo;
                </button>
              </div>
              <div className="calendar-grid">
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <div key={d} className="cal-weekday">
                    {d}
                  </div>
                ))}
                {[...Array(firstDayOfMonth)].map((_, i) => (
                  <div key={i} />
                ))}
                {[
                  ...Array(
                    daysInMonth(viewDate.getMonth(), viewDate.getFullYear()),
                  ),
                ].map((_, i) => {
                  const dayDate = new Date(
                    viewDate.getFullYear(),
                    viewDate.getMonth(),
                    i + 1,
                  );
                  const isBackDate = dayDate < today;
                  const isSelected = isSameDay(dayDate, selectedDate);

                  return (
                    <button
                      key={i}
                      disabled={isBackDate}
                      onClick={() => setSelectedDate(dayDate)}
                      className={`cal-day ${isBackDate ? "disabled" : ""} ${
                        isSelected ? "selected" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Banner with Image*/}
      <section className="image-banner">
        <div className="banner-img-container">
          <img
            src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Luxury Dining Atmosphere"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <p className="banner-text-large">
                Dining with us is never rushed, never crowded, and never
                ordinary. Should you wish to plan a special moment, our team
                will be delighted to assist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;
