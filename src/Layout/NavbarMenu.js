import './NavbarMenu.css';
// import '../App.css';
import {NavLink} from "react-router-dom";
// import {Link} from 'react-scroll';
import logo from '../Assets/logo_pasha_bouw3.png';
// import logo_falcon_Beat from '../Assets/Logo-falconxxl-beat2.png';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
// import LanguageDropdown from "../Components/LanguageDropdown"
// import Navbar2 from "./Navbar2";
// import { FaTimes, FaBars } from "react-icons/fa";



function NavbarMenu() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    // -----------------------------------------------------------------------------------

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // ------------------------languages selector--------------------------------------

    const { i18n, t } = useTranslation();

    // --------------------------------------------------------------

    return (
        <div className="Navbar1">
            <div className="Container-NavbarMenu">
                {/*<Link to="Container-banner" id="logo-falcon-NavMenu"*/}
                {/*      spy={true} smooth={true} offset={-40} duration={500}*/}
                {/*      onClick={closeMenu}>*/}
                {/*    <img src={logo} alt="flaconXXL-logo" className="logo-falcon-NavMenu"/>*/}
                {/*</Link>*/}

                <NavLink
                    to="/"
                    className="logo-menu"
                    onClick={scrollToTop}
                >
                    <img
                        src={logo}
                        alt="flaconXXL-logo"
                        className="logo-falcon-NavMenu"
                    />
                </NavLink>

                <ul className='Container-buttons-NavbarMenu'>

                    <li>
                        <div className="dropdown button-Menu"
                             spy={true}
                             smooth={true}
                             offset={50}
                             duration={500}
                             style={{fontWeight:"600"}}
                             onClick={closeMenu} id='nav-item'>
                            Diensten <i className="fa-solid fa-angle-down"></i>
                            {/*<i className="fa-solid fa-sort-down"></i>*/}

                            <div className="dropdown-content"
                                 style={{fontWeight:"300"}}>
                                <NavLink className="Services-Link" to="/BadkamerKozijnen">Deuren/Kozijnen</NavLink>
                                <NavLink className="Services-Link" to="#">Schilderwerk</NavLink>
                                <NavLink className="Services-Link" to="#">Tegelwerk</NavLink>
                                <NavLink className="Services-Link" to="#">Badkamer</NavLink>
                                <NavLink className="Services-Link" to="#">Stucwerk</NavLink>
                                <NavLink className="Services-Link" to="#">Keukenrenovatie</NavLink>
                                <NavLink className="Services-Link" to="#">Parketvloer</NavLink>
                                <NavLink className="Services-Link" to="#">Verbouwingen</NavLink>
                                <NavLink className="Services-Link" to="#">Elektrawerk</NavLink>
                            </div>
                        </div>
                    </li>

                    <li>
                        <NavLink  to='/Projects' className="button-Menu" activeClassName="active-link">Realisaties</NavLink>
                    </li>
                    <li>
                        <NavLink  to='/About' className="button-Menu" activeClassName="active-link">Over ons</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <NavLink  to='/News' className="button-Menu" activeClassName="active-link">News</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink  to='/Prices' className="button-Menu" activeClassName="active-link">Prices</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink  to='/Contact' className="button-Menu" activeClassName="active-link">Contact</NavLink>
                    </li>
                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href="https://www.instagram.com/falconxxl.media?igsh=ZWxsZ2t4djFoNTll&utm_source=qr"*/}
                    {/*        target="_blank"*/}
                    {/*        style={{color:"#5ba7fd"}}*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*        className="button-Menu"*/}
                    {/*        // aria-label="Instagram"*/}
                    {/*    >*/}
                    {/*        FalconXXL Beat*/}
                    {/*    </a>*/}

                    {/*</li>*/}
                </ul>


                <div className='Container-ContactUs-Languages'>

                    <div
                        className="container-telephone"
                        style={{color:"red", fontSize:"18px", fontWeight:"450"}}
                    >
                        <i className="fa-solid fa-phone"></i> +31 62 497 55 77
                    </div>

                    <NavLink to='/Contact' className="button-menu-ContactUs">
                        Neem contact op
                    </NavLink>

                    {/*<NavLink to='/Contact' className="button-menu-ContactUs">*/}
                    {/*    Contact us*/}
                    {/*</NavLink>*/}

                    {/*------------------selector languages-------------------------------------*/}

                    {/*<div className="container-languages">*/}
                    {/*    /!*<h2>{t("")}</h2>*!/*/}
                    {/*    /!*<label>{t("")}</label>*!/*/}
                    {/*    <LanguageDropdown i18n={i18n} />*/}
                    {/*    /!*<i className="fa-solid fa-chevron-down"></i>*!/*/}
                    {/*</div>*/}


                </div>
            </div>

        </div>
    );
}

export default NavbarMenu;