import './Hamburger.css';
import React, { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const location = useLocation();

    // Ferme le menu principal ET le sous-menu, en une seule fonction stable
    const closeMenu = useCallback(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, []);

    // Sécurité : à chaque changement de route (pathname, query, hash),
    // on force la fermeture du menu. Couvre les navigations
    // déclenchées ailleurs dans l'app (ex: navigate() programmatique).
    useEffect(() => {
        closeMenu();
    }, [location.pathname, location.search, location.hash, closeMenu]);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const toggleServices = () => setServicesOpen((prev) => !prev);

    // Utilisé sur CHAQUE lien (menu principal + sous-menu).
    // Ferme le menu immédiatement, que la route change ou non.
    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <div className="navbar-hamburger">
            <button
                className="menu-icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <button
                            className="menu-button"
                            onClick={toggleServices}
                            aria-expanded={servicesOpen}
                        >
                            Diensten
                        </button>
                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>
                            <li>
                                <NavLink to='/BadkamerKozijnen' className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Deuren/Kozijnen
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#' className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Tegelwerk
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Badkamer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Stucwerk
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#' className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Keukenrenovatie
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Parketvloer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Stucwerk
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#' className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Verbouwingen
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="Submenu-button-hamburger" onClick={handleLinkClick}>
                                    Elektrawerk
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to='/Projects' className="menu-button" onClick={handleLinkClick}>
                            Realisaties
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' className="menu-button" onClick={handleLinkClick}>
                            Over ons
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' className="menu-button" onClick={handleLinkClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Hamburger;