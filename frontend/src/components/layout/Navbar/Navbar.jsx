import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; // Adjust if your path is different
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand-icon">🌾</span>
          <span className="brand-text">Khadri Rice Store</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">
                Orders
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>

            {/* Admin Link - Visible only to Staff/Admin */}
            {user?.is_staff && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}