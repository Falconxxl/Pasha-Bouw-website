import './Home.css';
// import ContainerBanner from "../Layout/ContainerBanner";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
// import ContainerBanner3 from "../Components/ContainerBanner3";
import ContainerBanner2 from "../Layout/ContainerBanner2";
import ServiceHome from "../Layout/ServiceHome";
// import ServiceHome2 from "../Tests/ServiceHome2";
import OurWorkflow from "../Layout/OurWorkflow";
import WhyUs from "../Layout/WhyUs";
// import OurRealisations from "../Layout/OurRealisations";
import WhatsappFunction from "../Components/WhatsappFunction";
// import TestTwo from "../Tests/TestTwo/TestTwo";

import { useEffect, useState } from "react";
import PageLoader from "../Components/PageLoader";
import Navbar2Mobile from "../Layout/Navbar2Mobile";
import TopButton from "../Components/TopButton";
import Testimony from "../Layout/Testimony";
import Experience from "../Layout/Experience";


function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simule le chargement (images, composants lourds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700); // ajuste si besoin

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {loading && <PageLoader />}

            <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>

                <Navbar2/>
                <Navbar2Mobile/>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<ContainerBanner3/>*/}
                <ContainerBanner2/>
                {/*<ContainerBanner/>*/}
                <div className="Section-WhoAreWe"
                     style={{backgroundColor:"#f0f0f0"}}
                >
                    <div className="WhoAreWe-left">
                        <h1>Waarom kiezen klanten voor Pasha Bouw?</h1>

                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title">
                            De voordelen van onze aanpak: <p style={{color:"black", fontWeight:"300"}}>
                                Kwaaliteit, betrouwbaarheid en persoonlijke begeleiding.
                            </p>
                        </p>

                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div><strong>Kwaliteitswerk en verzorgde afwerking:</strong> Duurzame oplossingen met oog voor detail en een professionele afwerking.</div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div><strong>Respect voor deadlines:</strong> Wij voeren elk project uit binnen de afgesproken termijn.</div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div><strong>Gratis offerte en duidelijke prijsraming:</strong> Een transparante offerte vooraf, zonder verrassingen.</div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div><strong>Persoonlijke begeleiding:</strong> Wij begeleiden u van de start tot de oplevering.</div>
                            </div>
                        </div>


                        {/*<p className="WhoAreWe-text">*/}
                        {/*    We combine creativity, technical expertise, and storytelling to bring your*/}
                        {/*    brand to life through audiovisual production, web design, branding, and*/}
                        {/*    music, using techniques tailored to each client.<br/><br/>*/}

                        {/*    With an enthusiastic and experienced team, we collaborate closely with*/}
                        {/*    clients to deliver high-quality results quickly, ensuring impactful and*/}
                        {/*    memorable visuals.*/}
                        {/*</p>*/}
                    </div>

                </div>
                <ServiceHome/>
                <OurWorkflow/>
                <Experience/>
                <Testimony/>
                <WhyUs/>
                <TopButton/>
                <WhatsappFunction/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;