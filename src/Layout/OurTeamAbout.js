import './OurTeamAbout.css';
import React from "react";
import pic_anita from "../Images/pic_about_anita";
import pic_profil from "../Images/pic_about_profil.png";
import pic_profil2 from "../Images/pic_about_guy1.png";
import pic_profil3 from "../Images/pic_about_guy2.png";


function OurTeamAbout() {
    return (
        <div className="Container-OurTeam">

            <h1>Our Team</h1>

            <div className="Container-OurTeam-details" style={{backgroundColor:"#f3f3f3"}}>
                <div className="box-ourTeam">
                    <img src={pic_anita} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"red"}}>
                        Sophie van Dijk
                    </p>
                    <p>Director of Marketing/Communication</p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_profil} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"red"}}>
                        Peter Jansen
                    </p>
                    <p>schilder</p>
                </div>
                <div className="box-ourTeam">
                    <img src={pic_profil2} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"red"}}>
                        Jan de Vries
                    </p>
                    <p>Director of Marketing/Communication</p>
                </div>
                <div className="box-ourTeam1">
                    <img src={pic_profil3} alt="pic-anita"/>
                    <p style={{fontSize:"20px", fontWeight:"700", color:"red"}}>
                        Mark Bakker
                    </p>
                    <p>Timmerman</p>
                </div>
            </div>
        </div>
    );
}

export default OurTeamAbout;