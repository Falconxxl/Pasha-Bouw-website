import React, { useState } from 'react';
import './Contact.css';
import RequestAQuote from '../Components/RequestAQuote';
import RequestAQuoteModal from '../Components/Modal/RequestAQuoteModal';
import Navbar2 from "../Layout/Navbar2";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import WhatsappFunction from "../Components/WhatsappFunction";

function Contact() {
    const [openQuote, setOpenQuote] = useState(false);

    return (
        <>
            <Navbar2/>
            <Navbar2Mobile/>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <div className="contact-page">

                {/* ══════════════════════════════
                    HERO HEADER
                ══════════════════════════════ */}
                <div className="contact-hero">
                    {/*<span className="contact-eyebrow">Neem contact op</span>*/}
                    <h1 className="contact-main-title">
                        Leer ons kennen
                        {/*<span className="contact-accent">*/}
                        {/*kennen*/}
                    {/*</span>*/}
                    </h1>
                    {/*<p className="contact-hero-sub">*/}
                    {/*    Vrijblijvend advies. Altijd eerlijk.*/}
                    {/*</p>*/}
                </div>

                {/* ══════════════════════════════
                    MAIN CONTENT
                ══════════════════════════════ */}
                <div className="contact-wrapper">

                    {/* ── LEFT: info ── */}
                    <div className="contact-left">

                        {/* Intro text */}
                        <div className="contact-intro">
                            <p className="contact-intro-text">
                                Wij staan klaar om u te helpen. We gaan altijd net een stap
                                verder in onze communicatie. Laat ons weten wat uw voorkeur is.
                            </p>
                            <p className="contact-intro-sub">
                                Questions? Ask our <strong style={{ color: '#D62828' }}>Pasha Bouw</strong> team.
                            </p>
                        </div>

                        {/* Contact details */}
                        <div className="contact-details">

                            {/* Phone */}
                            <a href="tel:+3163733124" className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">Bel ons</span>
                                    <span className="contact-detail-value">+31 6 37 33 12 4</span>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="#" className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">E-mail ons</span>
                                    <span className="contact-detail-value">falconxxl.mail@gmail.com</span>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">Adres</span>
                                    <span className="contact-detail-value">
                                        Voorbeeldstraat 12<br />
                                        1234 AB Amsterdam<br />
                                        Nederland
                                    </span>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="contact-detail-row">
                                <div className="contact-detail-icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div className="contact-detail-text">
                                    <span className="contact-detail-label">Openingstijden</span>
                                    <div className="contact-hours">
                                        <div className="contact-hours-row">
                                            <span>Maandag – Zaterdag</span>
                                            <span className="contact-hours-time">08:00 – 18:00</span>
                                        </div>
                                        <div className="contact-hours-row">
                                            <span>Zondag</span>
                                            <span className="contact-hours-closed">Gesloten</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Social media */}
                        <div className="contact-social-block">
                            <p className="contact-social-label">Volg ons</p>
                            <div className="contact-socials">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Instagram"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://wa.me/3163733124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="WhatsApp"
                                >
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="Facebook"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-social-btn"
                                    aria-label="TikTok"
                                >
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* ── RIGHT: CTA card ── */}
                    <div className="contact-right">
                        <div className="contact-cta-card">

                            <div className="contact-cta-icon">
                                <i className="fa-solid fa-helmet-safety"></i>
                            </div>

                            <h2 className="contact-cta-title">
                                Klaar voor uw <span className="contact-accent">project</span>?
                            </h2>

                            <p className="contact-cta-text">
                                Vraag vandaag nog een vrijblijvende offerte aan. Wij nemen binnen
                                24 uur contact met u op en bespreken uw wensen persoonlijk.
                            </p>

                            <ul className="contact-cta-list">
                                <li><i className="fa-solid fa-check"></i> Gratis en vrijblijvend</li>
                                <li><i className="fa-solid fa-check"></i> Reactie binnen 24 uur</li>
                                <li><i className="fa-solid fa-check"></i> Eerlijk en transparant advies</li>
                                <li><i className="fa-solid fa-check"></i> Vakkundig en betrouwbaar team</li>
                            </ul>

                            <button
                                className="contact-cta-btn"
                                onClick={() => setOpenQuote(true)}
                            >
                                Vraag een offerte aan
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                        </div>
                    </div>

                </div>

            </div>

            {/* ══════════════════════════════
                MODAL
            ══════════════════════════════ */}
            <RequestAQuoteModal
                open={openQuote}
                onClose={() => setOpenQuote(false)}
            >
                <RequestAQuote onClose={() => setOpenQuote(false)} />
            </RequestAQuoteModal>

            <WhatsappFunction/>

            <Footer/>
        </>
    );
}

export default Contact;