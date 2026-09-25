import './ContainerBanner2.css';

import desktop_banner1 from "../../src/Images/background_timmerman2.jpg";
import mobile_banner from "../../src/Images/background_timmerman_mobile.jpg";

import { Link } from "react-scroll";

import React, { useState } from "react";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import Navbar2 from "./Navbar2";


function ContainerBanner2() {


    const [openQuote, setOpenQuote] = useState(false);


    return (

        <header className="hero-banner">

            {/* Background desktop */}

            <img
                src={desktop_banner1}
                alt="Renovation background"
                className="hero-image desktop-image"
            />


            {/* Background mobile */}

            <img
                src={mobile_banner}
                alt="Mobile background"
                className="hero-image mobile-image"
            />




            <div className="hero-content-box">


                <h1>
                    Uw woning vernieuwen?
                    {/*Wij maken uw droom werkelijkheid*/}
                </h1>



                <p>

                    <strong className="company-name">
                        Pasha Bouw
                    </strong> is uw specialist in renovatie, verbouwing en maatwerk.
                    Wij realiseren woningrenovaties, badkamer- en keukenrenovaties
                    met oog voor detail en kwaliteit.

                    Met vakmanschap creëren wij duurzame oplossingen
                    die volledig aansluiten bij uw wensen.

                </p>


                <div className="hero-buttons">

                    <Link
                        to="Container-ServiceHome"
                        // smooth={true}
                        // duration={500}
                        className="hero-btn services-btn"


                        offset={-90}

                        duration={500}

                        spy={true}

                        smooth={true}

                    >

                        Ontdek onze diensten

                        <i className="fa-solid fa-arrow-right"></i>

                    </Link>

                    <button

                        className="hero-btn quote-btn"

                        onClick={() => setOpenQuote(true)}

                    >

                        Vraag een offerte aan

                        <i className="fa-solid fa-arrow-right"></i>


                    </button>

                </div>

                <RequestAQuoteModal

                    open={openQuote}

                    onClose={() => setOpenQuote(false)}

                >

                    <RequestAQuote />

                </RequestAQuoteModal>

            </div>





            <Link

                to="Section-WhoAreWe"

                className="scroll-down"

                offset={-90}

                duration={500}

                spy={true}

                smooth={true}

            >

                <i className="fa-solid fa-angles-down"></i>


            </Link>

            <Navbar2/>



        </header>

    );
}


export default ContainerBanner2;