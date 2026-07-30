// import React, { useState } from "react";
import "./Prices.css";

import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Navbar2 from "../Layout/Navbar2";
import TopButton from "../Components/TopButton";
import Footer from "../Layout/Footer";
import PricingVideo from "../Layout/PricingVideo";
import PricingPhotography from "../Layout/PricingPhotography";
import PricingWebdesign from "../Layout/PricingWebdesign";
import PricingBranding from "../Layout/PricingBranding";
import PricingDigitalMarketing from "../Layout/PricingDigitalMarketing";


import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";



// 🧾 Import de tes composants de pricing
// import PricingAudiovisual from "../pricing/PricingAudiovisual";
// import PricingPhotography from "../pricing/PricingPhotography";
// import PricingWebdesign from "../pricing/PricingWebdesign";
// import PricingBranding from "../pricing/PricingBranding";
// import PricingDigitalMarketing from "../pricing/PricingDigitalMarketing";
// import PricingMusic from "../pricing/PricingMusic";

function Prices() {

    const [openQuote, setOpenQuote] = useState(false);

    const [activeModal, setActiveModal] = useState(null);

    const services = [
        { id: "audiovisual", label: "Audiovisual Pricing", component: <PricingVideo/> },
        { id: "photography", label: "Photography Pricing", component: <PricingPhotography/>},
        { id: "webdesign", label: "Web Design Pricing", component: <PricingWebdesign/> },
        { id: "branding", label: "Branding Pricing", component: <PricingBranding/> },
        { id: "digitalmarketing", label: "Digital Marketing Pricing", component: <PricingBranding/> },
        { id: "music", label: "Music Production Pricing", component: <PricingDigitalMarketing/> },
    ];

    return (
        <div>
            <NavbarMenu />
            <NavbarMenuMobile />
            <Navbar2 />

            {/* ======== PAGE CONTENT ======== */}
            <div className="prices-page">
                <h1>Our Prices</h1>
                <p className="intro-text">
                    We clearly display the prices of our main services: <strong> audiovisual, photography, web design,
                    branding, digital marketing, </strong> and <strong> music production.</strong> Click on a service below to view
                    detailed pricing information. For specific quotes, please contact us directly.
                </p>

                <div className="services-section">
                    <ul className="service-list">
                        {services.map((service) => (
                            <li
                                key={service.id}
                                className="service-item"
                                onClick={() => setActiveModal(service.id)}
                            >
                                <i className="fa-solid fa-circle-plus"></i>
                                <span>{service.label}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="request-button"
                            onClick={() => setOpenQuote(true)}
                    >
                        Request a Quote
                    </button>
                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>
                </div>

                {/* ======== MODAL ======== */}
                {activeModal && (
                    <div className="modal-overlay" onClick={() => setActiveModal(null)}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="close-modal"
                                onClick={() => setActiveModal(null)}
                            >
                                ✕
                            </button>
                            {services.find((s) => s.id === activeModal)?.component}
                        </div>
                    </div>
                )}
            </div>

            {/*<TopButton />*/}
            <WhatsappFunction/>
            <Footer />
        </div>
    );
}

export default Prices;
