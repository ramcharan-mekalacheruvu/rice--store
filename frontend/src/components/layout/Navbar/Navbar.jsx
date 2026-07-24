import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import "./Navbar.css";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    const { user } = useAuth();

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(window.scrollY > 15);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav
            className={`navbar navbar-expand-lg sticky-top ${scrolled ? "navbar-scrolled" : ""
                }`}
        >

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >

                    <span className="brand-icon">

                        🌾

                    </span>

                    <span className="brand-text">

                        Khadri Rice Store

                    </span>

                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <NavLink
                                to="/products"
                                className="nav-link"
                            >

                                Products

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/cart"
                                className="nav-link"
                            >

                                Cart

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/orders"
                                className="nav-link"
                            >

                                Orders

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/profile"
                                className="nav-link"
                            >

                                Profile

                            </NavLink>

                        </li>

                        {

                            user?.is_staff &&

                            <li className="nav-item">

                                <NavLink
                                    to="/admin"
                                    className="nav-link"
                                >

                                    Admin

                                </NavLink>

                            </li>

                        }

                    </ul>

                </div>

            </div>

        </nav>

    );

}