import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="row gy-4">

          {/* Store */}
          <div className="col-lg-4 col-md-6">

            <h3 className="footer-logo">
              🌾 Khadri Rice Store
            </h3>

            <p className="footer-description">
              Premium quality rice delivered directly from trusted farmers
              to your home with Cash on Delivery, WhatsApp Ordering and
              reliable customer support.
            </p>

            <div className="trust-badges">
              <span>🌾 Farm Fresh</span>
              <span>🚚 Fast Delivery</span>
              <span>💰 Cash on Delivery</span>
            </div>

          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/products">Products</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>

              <li>
                <Link to="/orders">Orders</Link>
              </li>

            </ul>

          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">

            <h5>Customer Support</h5>

            <ul className="footer-links">

              <li>📞 +91 97040 77705</li>

              <li>📧 support@khadriricestore.com</li>

              <li>🕒 Mon - Sat</li>

              <li>09:00 AM - 08:00 PM</li>

              <li>📍 Kadiri, Andhra Pradesh</li>

            </ul>

          </div>

          {/* Social */}
          <div className="col-lg-3 col-md-6">

            <h5>Connect With Us</h5>

            <div className="social-links">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
                Facebook
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
                Instagram
              </a>

              <a
                href="https://wa.me/919704077705"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                WhatsApp
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="footer-bottom">

          <p>
            © {year} <strong>Khadri Rice Store</strong>. All Rights Reserved.
          </p>

          <p>
            Made with ❤️ in Andhra Pradesh
          </p>

        </div>

      </div>

    </footer>
  );
}