import './ServiceHome.css';
import React, {useState} from "react";

import deuren_kozijn from "../Images/image_dienst_deuren_kozijn.jpg";
import schilderen from "../Images/image_dienst_schilderen.jpg";
import tegelwerk from "../Images/image_dienst_tegelwerk.jpg";
import Badkamerrenovatie from "../Images/image_dienst_badkamer.jpg";
import Stucwerk from "../Images/image_dienst_stucwerk.jpg";
import Keukenrenovatie from "../Images/image_dienst_keukenrenovatie.jpg";
import Parketvloer from "../Images/image_dienst_parketvloer.jpg";
import Verbouwingen from "../Images/image_dienst_verbouwingen.jpg";
import Elektrawerk from "../Images/image_dienst_elektrawerk.jpg";

import icon_deuren from "../Images/icon_deur1.jpg";
import icon_schilderwerk from "../Images/icon_schilderwerk.jpg";
import icon_tegelwerk from "../Images/icon_tegelwerk.jpg";
import icon_Badkamerrenovatie from "../Images/icon_badkamer.jpg";
import icon_Stucwerk from "../Images/icon_stucwerk.jpg";
import icon_Keukenrenovatie from "../Images/icon_keukenrenovatie.jpg";
import icon_Parketvloer from "../Images/icon_parketvloer.jpg";
import icon_Verbouwingen from "../Images/icon_verbouwingen.jpg";
import icon_Elektrawerk from "../Images/icon_elektrawerk.jpg";

import {NavLink} from "react-router-dom";




function ServiceHome () {


    const [openModal, setOpenModal] = useState(false);


    return (
        <div className="Container-ServiceHome">

            <h1 className="title-ServiceHome">
                Ontdek onze diensten <br/>
            </h1>
            <h1 className="title-ServiceHome-mobile">
                Ontdek onze diensten
            </h1>

            {/*----------------Deuren en Kozijn--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={deuren_kozijn} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_deuren} alt="wedding_home" className="icon_home_services" />
                        Deuren/Kozijnen
                    </h3>
                    <h2>Vakkundige plaatsing voor meer comfort en uitstraling.</h2>
                    <p>
                        Geef uw woning een nieuwe uitstraling met professioneel geplaatste
                        deuren en kozijnen. Wij zorgen voor een nauwkeurige afwerking met
                        duurzame materialen, waarbij kwaliteit en stijl centraal staan.
                        Of het nu gaat om renovatie of vervanging, wij creëren oplossingen
                        die perfect aansluiten bij uw wensen en uw woning meer comfort geven.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Scilderwerk--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={schilderen} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_schilderwerk} alt="wedding_home" className="icon_home_services" />
                        Schilderwerk
                    </h3>
                    <h2>Een frisse uitstraling voor uw woning.</h2>
                    <p>
                        Geef uw interieur en exterieur een nieuwe look met professioneel schilderwerk.
                        Wij zorgen voor een strakke afwerking, hoogwaardige materialen en een resultaat
                        dat past bij uw stijl. Van kleine schilderwerken tot volledige renovaties,
                        wij maken uw woning weer helemaal verzorgd.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Tegelwerk--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={tegelwerk} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_tegelwerk} alt="wedding_home" className="icon_home_services" />
                        Tegelwerk
                    </h3>
                    <h2>Duurzame afwerking met oog voor detail.</h2>
                    <p>
                        Wij verzorgen professioneel tegelwerk voor vloeren, wanden en verschillende
                        ruimtes in uw woning. Met precisie en vakmanschap creëren wij een stijlvolle
                        en duurzame afwerking die perfect aansluit bij uw wensen.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Badkamerrenovatie--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Badkamerrenovatie} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Badkamerrenovatie} alt="wedding_home" className="icon_home_services" />
                        Badkamer
                    </h3>
                    <h2>Uw badkamer volledig vernieuwd.</h2>
                    <p>
                        Wij transformeren uw badkamer tot een comfortabele en moderne ruimte.
                        Van tegelwerk en sanitair tot de volledige afwerking: wij realiseren
                        een badkamer waarin kwaliteit, functionaliteit en design samenkomen
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Stucwerk--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Stucwerk} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Stucwerk} alt="wedding_home" className="icon_home_services" />
                        Stucwerk
                    </h3>
                    <h2>Strakke muren en een perfecte afwerking</h2>
                    <p>
                        Met professioneel stucwerk geven wij uw woning een nette en moderne
                        uitstraling. Wij zorgen voor gladde wanden en plafonds die de perfecte
                        basis vormen voor een prachtig interieur.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>


            {/*----------------Keukenrenovatie--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Keukenrenovatie} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Keukenrenovatie} alt="wedding_home" className="icon_home_services" />
                        Keukenrenovatie
                    </h3>
                    <h2>Een keuken die past bij uw levensstijl.</h2>
                    <p>
                        Wij vernieuwen uw keuken zodat deze weer praktisch, modern en stijlvol wordt.
                        Van aanpassingen en afwerking tot complete renovaties: wij creëren een keuken
                        waarin comfort en uitstraling centraal staan.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Parketvloer--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Parketvloer} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Parketvloer} alt="wedding_home" className="icon_home_services" />
                        Parketvloer
                    </h3>
                    <h2>Warme uitstraling met een stijlvolle vloer.</h2>
                    <p>
                        Een mooie parketvloer geeft uw woning karakter en warmte.
                        Wij plaatsen en werken parketvloeren professioneel af voor een
                        duurzaam resultaat dat jarenlang meegaat.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*----------------Verbouwingen--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Verbouwingen} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Verbouwingen} alt="wedding_home" className="icon_home_services" />
                        Verbouwingen
                    </h3>
                    <h2>Meer ruimte en mogelijkheden voor uw woning.</h2>
                    <p>
                        Wij realiseren verschillende verbouwingen die uw woning verbeteren en
                        aanpassen aan uw behoeften. Van kleine aanpassingen tot grotere projecten,
                        wij begeleiden elke stap met vakmanschap en aandacht voor detail.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>

            {/*---------------- Elektrawerk--------------------------*/}

            <div className="Container-ServiceHome-single">

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={Elektrawerk} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_Elektrawerk} alt="wedding_home" className="icon_home_services" />
                        Elektrawerk
                    </h3>
                    <h2>Veilige en professionele elektrische installaties.</h2>
                    <p>
                        Wij verzorgen elektrische werkzaamheden voor renovaties en verbouwingen.
                        Van nieuwe aansluitingen tot het aanpassen van bestaande installaties:
                        wij zorgen voor een veilige en betrouwbare oplossing voor uw woning.
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        Ontdek onze dienst
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

            </div>


        </div>

    );
}

export default ServiceHome ;