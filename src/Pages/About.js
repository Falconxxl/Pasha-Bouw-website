import './About.css';
import NavbarMenu from "../Layout/NavbarMenu";
// import TopButton from "../Components/TopButton";
import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../Components/LanguageSwitcher";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";

// import videoBannerAbout from "../../src/MyVideos/banner_video_about2.mp4"
// import video_drone from "../MyVideos/DRONE_SHOT_VIDEO.mp4";
// import video_drone_mobile from "../MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";
// import React from "react";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
// import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
// import RequestAQuote from "../Components/RequestAQuote";


// import Michea_pic_about from "../Images/michael_pic1.png";
// import mike_direction_photo from "../Images/mike_photography_model2";
// import pic_about_tel1 from "../Images/pic_about_tel1.png";
import WhyUs from "../Layout/WhyUs";
// import CertificationMichael from "../Layout/CertificationMichael";
import OurTeamAbout from "../Layout/OurTeamAbout";
import WhatsappFunction from "../Components/WhatsappFunction";
import Navbar2Mobile from "../Layout/Navbar2Mobile";

function About() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);


    const { t } = useTranslation();

    useEffect(() => {
        // page lourde (vidéos + images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <PageLoader />}
            <div className={`about-wrapper ${loading ? "hidden" : "visible"}`}>

                <Navbar2/>
                <Navbar2Mobile/>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}
                <div className="container-top"></div>

                {/*---------------Banner-About----------------*/}

                {/*<div className="section-drone-video" style={{ backgroundColor: "#f3bb2f" }}>*/}
                {/*    <div className="texte-drone" style={{ backgroundColor: "#f3bb2f" }}>*/}
                {/*        <h1*/}
                {/*            style={{ fontSize: "48px", lineHeight:1.1 , fontWeight:400, color:"black"}}>*/}
                {/*            We build your dream*/}
                {/*        </h1>*/}
                {/*        <p style={{color:"black"}}>*/}
                {/*            Every entrepreneur starts with a dream. At <strong>FalconXXL</strong>, we help you turn that dream into reality.*/}
                {/*            Through our creativity and expertise, we build the visual identity that sets you apart, strengthens your brand,*/}
                {/*            and makes your business unstoppable. We help you stand out, grow, and reach your goals with confidence.*/}
                {/*        </p>*/}
                {/*        <button className="Drone-quote-button"*/}
                {/*                onClick={() => setOpenQuote(true)}*/}

                {/*                style={{backgroundColor: "#f3bb2f",color:"black", border:"1px solid black"}}>*/}
                {/*            Request a Quote*/}
                {/*            <i className="fa-solid fa-arrow-right"></i>*/}
                {/*        </button>*/}
                {/*        <RequestAQuoteModal*/}
                {/*            open={openQuote}*/}
                {/*            onClose={() => setOpenQuote(false)}*/}
                {/*        >*/}
                {/*            <RequestAQuote />*/}
                {/*        </RequestAQuoteModal>*/}
                {/*    </div>*/}

                {/*    <div className="wrapper-drone-video">*/}
                {/*        /!* Vidéo Desktop *!/*/}
                {/*        <video*/}
                {/*            className="drone-video-desktop"*/}
                {/*            src={video_drone}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}

                {/*        /!* Vidéo Mobile *!/*/}
                {/*        <video*/}
                {/*            className="drone-video-mobile"*/}
                {/*            src={video_drone_mobile}*/}
                {/*            autoPlay*/}
                {/*            muted*/}
                {/*            loop*/}
                {/*            playsInline*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*---------------Wie zijn we?---------------------------------------*/}

                <div className="Section-WhoAreWe" style ={{backgroundColor:"white"}}>
                    <div className="WhoAreWe-left"
                    >
                        <h1>Wie zijn we?</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title" style ={{fontSize:"18px", fontWeight:"300"}}>
                           Bij <strong style={{color:"red"}}> Pasha Bouw </strong> combineren
                            wij vakmanschap, kwaliteit en persoonlijke service
                            om uw renovatie- en verbouwingsprojecten tot leven te brengen.
                            Wij zijn gespecialiseerd in woningrenovaties, badkamers, keukens
                            en maatwerkoplossingen. Met oog voor detail realiseren wij
                            duurzame resultaten die perfect aansluiten bij uw wensen.
                        </p>
                    </div>

                </div>

                {/*--------section-about-founder-Michael Ilunga------------------*/}

                {/*<section className="audiovisual-direction-Mike" style={{*/}
                {/*    borderBottom: "1px solid",*/}
                {/*    borderImage: "linear-gradient(to right, #f9e054, #cb954d) 1",*/}
                {/*    paddingBottom:"0px"}}*/}
                {/*>*/}
                {/*    <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>*/}
                {/*        <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>*/}
                {/*            <img src={Michea_pic_about} alt="Mike giving direction during a shoot"*/}
                {/*                 style={{width:"400px"}}/>*/}
                {/*        </div>*/}
                {/*        <div className="audiovisual-direction-text" style={{padding:"20px"}}>*/}
                {/*            <div className="audiovisual-direction-badge">*/}
                {/*            </div>*/}
                {/*            <h1>Meet the Founder of Falcon XXL</h1>*/}

                {/*            <p style={{color:"black", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>*/}
                {/*                <strong>Michael Ilunga</strong>, the founder of <strong>FalconXXL</strong>, was born in the Democratic Republic*/}
                {/*                of Congo and later moved to the Netherlands, where he grew up between two cultures. This dual identity*/}
                {/*                shaped his creative vision and enabled him to master Dutch, English, and French.<br/><br/>*/}

                {/*                He studied Marketing at ROC Zeeland and earned a Bachelor of Science (BSc) in Communication*/}
                {/*                Multimedia Design from The Hague University, specializing in digital*/}
                {/*                problem-solving through websites, apps, visual design, and video production.*/}
                {/*                He later strengthened his technical expertise by graduating as a Front-End Developer*/}
                {/*                from Novi University, mastering React, HTML, and CSS.<br/><br/>*/}

                {/*                Alongside his studies, Michael explored music, which led him to develop strong skills*/}
                {/*                in video production, creative storytelling, and digital editing using tools such as*/}
                {/*                Adobe Premiere Pro, After Effects, and DaVinci Resolve.<br/><br/>*/}

                {/*                As a member of the African diaspora in Europe, Michael observed that many talented*/}
                {/*                African entrepreneurs and influencers lacked access to high-quality visual branding.*/}
                {/*                This insight inspired the creation of FalconXXL, a company dedicated to empowering the*/}
                {/*                African diaspora with professional branding, powerful digital tools, and visual*/}
                {/*                identities that help them stand out, grow, and make an impact.*/}
                {/*            </p><br/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*--------Certification------------------*/}

                {/*<CertificationMichael/>*/}

                {/*--------section-about-mission & vision------------------*/}

                {/*<section className="audiovisual-direction-Mike" style={{backgroundColor:"black"}}>*/}
                {/*    <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>*/}

                {/*        <div className="audiovisual-direction-text" style={{backgroundColor:"black", padding:"20px"}}>*/}
                {/*            <div className="audiovisual-direction-badge">*/}
                {/*            </div>*/}
                {/*            <h1 style={{color:"white"}}>Our Mission</h1>*/}

                {/*            <h2 style={{*/}
                {/*                color:"#f3bb2f",*/}
                {/*                fontWeight:"400",*/}
                {/*                fontFamily:"Poppins, " +*/}
                {/*                    "sans-serif",*/}
                {/*                marginBottom:"20px",*/}
                {/*                fontSize:"21px"*/}
                {/*            }}>*/}
                {/*                Short term*/}
                {/*            </h2>*/}

                {/*            <p style={{color:"white", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>*/}
                {/*                Our mission is to equip African entrepreneurs, influencers, and creators with powerful*/}
                {/*                branding, professional visual identities, and high-quality digital tools that help them*/}
                {/*                reach their goals faster and more effectively. We aim to inspire them to dream bigger,*/}
                {/*                rise above limitations, and present their talent with confidence and excellence.<br/><br/>*/}

                {/*                <h2 style={{*/}
                {/*                    color:"#f3bb2f",*/}
                {/*                    fontWeight:"400",*/}
                {/*                    fontFamily:"Poppins, " +*/}
                {/*                        "sans-serif",*/}
                {/*                    marginBottom:"20px",*/}
                {/*                    fontSize:"21px"*/}
                {/*                }}>*/}
                {/*                    Long term*/}
                {/*                </h2>*/}

                {/*                Our long-term mission is to empower African talent worldwide by providing strong digital solutions and visual identities that elevate their brands.*/}
                {/*                We want to help them sell their services more easily, connect with their audiences,*/}
                {/*                and position themselves as strong, competitive players on the global market.<br/><br/>*/}
                {/*            </p><br/>*/}

                {/*            <h1 style={{color:"white"}}>Our Vision</h1>*/}

                {/*            <h2 style={{*/}
                {/*                color:"#f3bb2f",*/}
                {/*                fontWeight:"400",*/}
                {/*                fontFamily:"Poppins, " +*/}
                {/*                    "sans-serif",*/}
                {/*                marginBottom:"20px",*/}
                {/*                fontSize:"21px"*/}
                {/*            }}>*/}
                {/*                Short term*/}
                {/*            </h2>*/}

                {/*            <p style={{color:"white", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>*/}
                {/*                FalconXXL aims to make a strong impact within the African diaspora living in the Netherlands,*/}
                {/*                Belgium, France, Luxembourg, and Germany. Our goal is to help entrepreneurs and creators*/}
                {/*                in these regions gain access to high-quality branding, professional marketing tools,*/}
                {/*                and creative assets that will allow them to grow, serve their clients better,*/}
                {/*                and confidently showcase their potential.<br/><br/>*/}

                {/*                <h2 style={{*/}
                {/*                    color:"#f3bb2f",*/}
                {/*                    fontWeight:"400",*/}
                {/*                    fontFamily:"Poppins, " +*/}
                {/*                        "sans-serif",*/}
                {/*                    marginBottom:"20px",*/}
                {/*                    fontSize:"21px"*/}
                {/*                }}>*/}
                {/*                    Long term*/}
                {/*                </h2>*/}

                {/*                In the long term, FalconXXL strives to become a global creative powerhouse,*/}
                {/*                extending its influence across Europe and eventually into Africa.*/}
                {/*                We aim to support African entrepreneurs and creators worldwide by equipping*/}
                {/*                them with digital solutions, visual identities, and creative tools that make*/}
                {/*                them powerful, competitive, and unstoppable.<br/><br/>*/}
                {/*            </p><br/>*/}
                {/*        </div>*/}

                {/*        <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>*/}
                {/*            <img src={pic_about_tel1} alt="Mike giving direction during a shoot"*/}
                {/*                 style={{width:"400px"}}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*-------------------------------------------------------------*/}

                <OurTeamAbout/>

                {/*-------------------------------------------------------------*/}

                {/*<h1 className="text-try">{t("about")}</h1>*/}
                {/*<LanguageSwitcher/>*/}
                <NavbarMenu/>



                {/*<div className="text-try">*/}
                {/*    {t("welcome").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("about").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("contact").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("yes").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <OurWorkflow/>
                <WhyUs/>
                {/*<TopButton/>*/}
                <WhatsappFunction/>
                <Footer/>
            </div>

        </div>
    );
}

export default About;