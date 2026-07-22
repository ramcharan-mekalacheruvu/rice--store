import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (

        <footer className="footer">

            <div className="container">

                <div className="row">

                    {/* Store */}

                    <div className="col-lg-4 col-md-6 mb-4">

                        <h3 className="footer-logo">
                            🌾 Rice Store
                        </h3>

                        <p>

                            Premium quality rice delivered
                            directly to your home with
                            Cash on Delivery.

                        </p>

                    </div>

                    {/* Links */}

                    <div className="col-lg-2 col-md-6 mb-4">

                        <h5>Quick Links</h5>

                        <ul>

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/products">Products</Link></li>

                            <li><Link to="/cart">Cart</Link></li>

                            <li><Link to="/orders">Orders</Link></li>

                        </ul>

                    </div>

                    {/* Customer */}

                    <div className="col-lg-3 col-md-6 mb-4">

                        <h5>Customer Support</h5>

                        <ul>

                            <li>📞 +91 9704077705</li>

                            <li>📧 support@ricestore.com</li>

                            <li>🕒 Mon - Sat</li>

                            <li>9:00 AM - 8:00 PM</li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div className="col-lg-3 col-md-6 mb-4">

                        <h5>Follow Us</h5>

                        <div className="social-links">

                            <a href="#">Facebook</a>

                            <a href="#">Instagram</a>

                            <a href="#">WhatsApp</a>

                        </div>

                    </div>

                </div>

                <hr />

                <div className="footer-bottom">

                    © 2026 Khadri Rice Store |
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );
}