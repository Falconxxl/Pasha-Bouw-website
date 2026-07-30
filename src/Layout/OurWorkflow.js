import './OurWorkflow.css';
import icon_offerte from "../Images/icon_offerte.jpg"
import icon_planning from "../Images/icon_planning.jpg"
import icon_werkzaamheden from "../Images/icon_werkzaamheden.jpg"
import icon_controle from "../Images/icon_controle.jpg"
import React from "react";

function OurWorkflow() {
    return (
        <div className="Container-OurWorkflow">
            <h1>Onze werkwijze</h1>

            <div className="OurWorkflow-wrapper">

                <div className="Container-OurWorkflow-content">
                    <img src={icon_offerte} alt="wedding_home" className="icon_home_workflow" />
                    <h2>1. Offerte aanvragen</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Vraag een offerte aan via het formulier, WhatsApp, e-mail of telefoon.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Beschrijf de gewenste werkzaamheden.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Wij bevestigen uw aanvraag snel.</span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_planning} alt="wedding_home" className="icon_home_workflow" />
                    <h2>2. Analyse en planning</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Wij beoordelen uw project.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Indien nodig plannen wij een locatiebezoek.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Daarna maken wij de definitieve offerte en planning.</span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_werkzaamheden} alt="wedding_home" className="icon_home_workflow" />
                    <h2>3. Uitvoering van de werkzaamheden</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Onze vakmensen voeren de werkzaamheden uit.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Wij werken volgens de afgesproken planning.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>U blijft op de hoogte van de voortgang.</span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_controle} alt="wedding_home" className="icon_home_workflow" />
                    <h2>4. Controle en oplevering</h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Wij voeren een eindcontrole uit.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Samen controleren wij het resultaat.</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>Na uw goedkeuring leveren wij het project op.</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default OurWorkflow;