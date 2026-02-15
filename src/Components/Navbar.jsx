import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  /*No scrolling when the navbar is open*/

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  /* ===============================
     SCROLL EFFECT
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     CLOSE DROPDOWN ON OUTSIDE CLICK
  =============================== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents immediate close
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-float" : "navbar-flat"}`}>
      {/* MOBILE HAMBURGER */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </div>

      {/* LOGO */}
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          <b>ABC HOTELS</b>
        </Link>
      </div>

      {/* NAVIGATION LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/accommodation" onClick={() => setMenuOpen(false)}>
          Accommodation
        </Link>

        <Link to="/dining" onClick={() => setMenuOpen(false)}>
          Dining
        </Link>

        {/* EXPERIENCES DROPDOWN */}
        <div
          className={`nav-dropdown ${dropdownOpen ? "active" : ""}`}
          ref={dropdownRef}
        >
          <span className="dropdown-trigger" onClick={toggleDropdown}>
            Experiences{" "}
            <ChevronDown
              size={14}
              style={{
                transition: "transform 0.3s ease",
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </span>

          <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
            <Link
              to="/experiences/taj-mahal"
              onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              Taj Mahal
            </Link>

            <Link
              to="/experiences/sadar"
              onClick={() => {
                setMenuOpen(false);
                setDropdownOpen(false);
              }}
            >
              Sadar Bazar
            </Link>
          </div>
        </div>
      </div>

      {/* CTA RIGHT */}
      <button className="cta-btn desktop-cta">Book Now</button>
    </nav>
  );
};

export default Navbar;
