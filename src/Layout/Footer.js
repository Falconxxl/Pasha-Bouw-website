import './Footer.css';
import logo_footer from '../Assets/logo_pasha_bouw_white3.png';

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import {NavLink} from "react-router-dom";

function Footer() {

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-Footer">
            <div className="Container-Footer-content1">

                <div className="Container-Footer-logoSlogan">
                    <img src={logo_footer} alt="flaconXXL-logo" className="logo-falcon-Footer"/>
                    <h1>Ontvang nu uw persoonlijke offerte</h1>
                    <button
                        onClick={() => setOpenQuote(true)}>
                        Vraag een offerte aan
                    </button>
                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>
                </div >

                <div className="Container-Footer-links">

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Diensten</h>
                        <NavLink to='/BadkamerKozijnen' className="Footer-links">Deuren/Kozijnen</NavLink>
                        <NavLink to='/Photography' className="Footer-links">Schilderwerk</NavLink>
                        <NavLink to='/Webdesign' className="Footer-links">Tegelwerk</NavLink>
                        <NavLink to='/BrandIdentity' className="Footer-links">Badkamer</NavLink>
                        <NavLink to='/DigitalMarketing' className="Footer-links">Stucwerk </NavLink>
                        <NavLink to='/Music' className="Footer-links">Keukenrenovatie</NavLink>
                        <NavLink to='/BrandIdentity' className="Footer-links">Parketvloer</NavLink>
                        <NavLink to='/DigitalMarketing' className="Footer-links">Verbouwingen</NavLink>
                        <NavLink to='/Music' className="Footer-links">Elektrawerk</NavLink>
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Links</h>
                        <NavLink to='/Projects' className="Footer-links">Realisaties</NavLink>
                        <NavLink to='/About' className="Footer-links">Over ons</NavLink>
                        {/*<NavLink to='/News' className="Footer-links">News</NavLink>*/}
                        {/*<NavLink to='/Trainings' className="Footer-links">Trainings</NavLink>*/}
                        <NavLink to='/Contact' className="Footer-links">Contact</NavLink>

                        {/*<a*/}
                        {/*    href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"*/}
                        {/*    target="_blank"*/}
                        {/*    style={{color:"#5ba7fd"}}*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*    className="Footer-links"*/}
                        {/*>*/}
                        {/*    FalconXXL Beat*/}
                        {/*</a>*/}
                    </div>

                    <div className="Container-Footer-links-details">
                        <h className="Footer-title">Extra</h>
                        {/*<NavLink to='/News' className="Footer-links">News</NavLink>*/}
                        {/*<NavLink to='/Trainings' className="Footer-links">Trainings</NavLink>*/}
                        <NavLink to='/Shop' className="Footer-links">Cookiebeleid</NavLink>
                        <NavLink to='/PrivacyPolicy' className="Footer-links">Privacyverklaring</NavLink>
                        <NavLink to='/ConditionsOfSale' className="Footer-links">Algemene voorwaarden</NavLink>
                        <NavLink to='/Faq' className="Footer-links">FAQ</NavLink>
                    </div>

                    <div className="Container-Footer-links-details-contact">
                        <h className="Footer-title">Contacts</h>
                        <p className="Footer-title-details">Tel:</p>
                        <p className="Footer-title-details-small">+31 62 497 55 77</p>
                        {/*<p className="Footer-title-details-small">+31685533124 (France)</p>*/}
                        {/*<p className="Footer-title-details-small">+31685533124 (Belgium)</p>*/}
                        {/*<p className="Footer-title-details-small">+31685533124 (DRC/Kinshasa)</p>*/}

                        <p className="Footer-title-details">Email:</p>
                        <p className="Footer-title-details-small">contact@pashabouw.nl</p>

                        <p className="Footer-title-details">Adres:</p>
                        <p className="Footer-title-details-small">Industrieweg </p>
                        <p className="Footer-title-details-small">4338PR Middelburg</p>
                        {/*<p className="Footer-title-details-small">Industrieweg / 4338PR / Middelburg</p>*/}

                    </div>

                </div>

                <div className="Container-Footer-SocialMedia">
                    <h className="Footer-title">Social media</h>
                    <div className="Footer-SocialMedia">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="Instagram"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="YouTube"
                        >
                            <i className="fa-brands fa-youtube"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="TikTok"
                        >
                            <i className="fa-brands fa-tiktok"></i>
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="Footer-SocialMedia-icon"
                            aria-label="LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                    </div>
                </div>

            </div>

            <div className="Container-Footer-content2">
                {/*<h1>Receive our latest news and offers directly by email.</h1>*/}

                {/*<div className="Container-Footer-TextNewsletter">*/}

                {/*    <form className="Form-footer-newsletter">*/}
                {/*        <input type="text"*/}
                {/*               placeholder="Email@example.com..."*/}
                {/*               className="Input-Form-footer"*/}
                {/*               id="x-name"*/}
                {/*               name="name"*/}
                {/*               style={{color:"white"}}*/}
                {/*        />*/}

                {/*        <button type="submit"*/}
                {/*                className="button-Form-footer"*/}
                {/*                value="send-newsletter">*/}
                {/*            Suscribe*/}
                {/*        </button>*/}
                {/*    </form>*/}
                {/*</div>*/}

                <p>
                    Website ontwikkeld door <strong>

                        <a
                            href="https://nexteclat.com"
                            target="_blank"
                            style={{color:"white"}}
                            rel="noopener noreferrer"
                        >
                            Nexteclat
                        </a>

                    </strong>
                    <br/>
                    <i className="fa-regular fa-copyright"></i>&nbsp;
                     2026 <strong>NEXTECLAT</strong> | Alle rechten voorbehouden
                </p>
            </div>
        </div>
    );
}

export default Footer;