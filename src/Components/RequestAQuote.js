import React, { useState } from 'react';
import './RequestAQuote.css';
import TopButton from "./TopButton";
import Footer from "../Layout/Footer";
import WhatsappFunction from "./WhatsappFunction";
import Navbar2 from "../Layout/Navbar2";
import emailjs from '@emailjs/browser';


function RequestAQuote({ onClose }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        company: '',
        email: '',
        phone: '',
        cityCountry: '',
        website: '',
        service: '',
        budget: '',
        projectDesc: '',
        deadline: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.role.trim()) newErrors.role = 'Role is required';

        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';

        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.cityCountry.trim()) newErrors.cityCountry = 'City / Country required';

        if (!formData.service) newErrors.service = 'Please choose a service type';
        if (!formData.budget) newErrors.budget = 'Please choose a budget range';
        if (!formData.projectDesc.trim()) newErrors.projectDesc = 'Project description required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            cityCountry: formData.cityCountry,
            website: formData.website,
            service: formData.service,
            budget: formData.budget,
            projectDesc: formData.projectDesc,
            deadline: formData.deadline,
        };

        emailjs.send(
            'service_230td4v',
            'template_57ai8cc',
            templateParams,
            '9muouI1nF6x1Do-Pe'
        )
            .then(() => {
                alert('✅ Your message has been sent successfully!');

                setFormData({
                    firstName: '',
                    lastName: '',
                    role: '',
                    company: '',
                    email: '',
                    phone: '',
                    cityCountry: '',
                    website: '',
                    service: '',
                    budget: '',
                    projectDesc: '',
                    deadline: ''
                });
            })
            .catch((error) => {
                console.error(error);
                alert('❌ An error occurred. Please try again.');
            });
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Navbar2/>
            <div className="Container-icon-RequestAQuote">
                <button
                    className="wrapper-icon-RequestAQuote"
                    onClick={onClose}
                >
                </button>

            </div>

            <div className="Container-RequestAQuote">

                <h1 className="title-RequestAQuote">
                    <strong style={{color:"black"}}> Een vraag ?</strong><br/>
                    <strong>Een opdracht ?</strong>
                </h1>

                <div className="request-container">

                    {/*--------------------form----------------------*/}

                    <form className="form-section" onSubmit={handleSubmit}>

                        <div className="line"></div>
                        <h2 className="request-form-title">Waarover gaat uw aanvraag?</h2>

                        <div className="row">
                            <div className="field">
                                <label className="request-form-label"></label>
                                <input name="Voornaam"
                                       value={formData.firstName}
                                       onChange={handleChange}
                                       className="Input-hover"
                                       placeholder="Voornaam*"
                                       style={{width:"100%", height:"50px", borderRadius:"7px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "white", background:"transparent"}}
                                />
                            </div>
                            {errors.firstName && <p className="error">{errors.firstName}</p>}

                            <div className="field">
                                <input name="Achternaam"
                                       className="Input-hover"
                                       value={formData.lastName}
                                       onChange={handleChange}
                                       placeholder="Achternaam*"
                                       style={{width:"100%", height:"50px", borderRadius:"7px", marginLeft:"0px"
                                           ,fontSize:"15px", fontFamily:"Poppins", paddingLeft:"14px",
                                           color: "white", background:"transparent"}}/>
                            </div>
                            {errors.lastName && <p className="error">{errors.lastName}</p>}


                        </div>

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="email" value={formData.email} onChange={handleChange}
                                   placeholder="Email*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"7px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.email && <p className="error">{errors.email}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="phone" value={formData.phone} onChange={handleChange}
                                   placeholder="Telefoonnummer*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"7px"
                                       , paddingLeft:"10px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.phone && <p className="error">{errors.phone}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <input name="cityCountry" value={formData.cityCountry} onChange={handleChange}
                                   placeholder="Stad*"
                                   className="Input-hover"
                                   style={{width:"100%", height:"50px", borderRadius:"7px"
                                       , paddingLeft:"14px",fontSize:"15px", fontFamily:"Poppins",
                                       color: "white", background:"transparent"}}/>
                        </div>
                        {errors.cityCountry && <p className="error">{errors.cityCountry}</p>}

                        <div className="field-full">
                            <label className="request-form-label"></label>
                            <select name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{ color: "darkgray", background:"transparent" }}

                            >
                                <option value="">Selecteer de geweeste dienst</option>
                                <option>Deuren/Kozijnen</option>
                                <option>Schilderwerk</option>
                                <option>Tegelwerk</option>
                                <option>Badkamer</option>
                                <option>Stucwerk</option>
                                <option>Keukenrenovatie</option>
                                <option>Parketvloer</option>
                                <option>Verbouwingen</option>
                                <option>Elektrawerk</option>
                                <option>Anders</option>
                            </select>
                        </div>
                        {errors.service && <p className="error">{errors.service}</p>}

                        <div className="field-full">
                            <label className="request-form-label"></label>
                            <select name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{ color: "darkgray", background:"transparent" }}

                            >
                                <option value="">Select jouw type woning</option>
                                <option>Huis</option>
                                <option>Appartement</option>
                                <option>Kantoor / bedrijf</option>
                                <option>Anders</option>
                            </select>
                        </div>
                        {errors.service && <p className="error">{errors.service}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <select name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="request-form-select"
                                    style={{color:"darkgray"}}
                            >
                                <option value="">Select jouw geschatte budget</option>
                                <option>€200 – €500</option>
                                <option>€500 – €1,000</option>
                                <option>€1,000 – €3,000</option>
                                <option>€3,000 – €10,000</option>
                                <option>I weet het nog niet</option>
                            </select>
                        </div>
                        {errors.budget && <p className="error">{errors.budget}</p>}

                        <div className="field full">
                            <label className="request-form-label"></label>
                            <textarea name="projectDesc" value={formData.projectDesc}
                                      onChange={handleChange}
                                      className="Input-hover"
                                      placeholder="Beschrijf jouw project..."
                                      style={{width:"100%", height:"150px", borderRadius:"7px",
                                          padding:"14px",marginBottom:"10px", fontSize:"15px", fontFamily:"Poppins",
                                          color: "white", background:"transparent"}}>
                            </textarea>
                        </div>
                        {/*{errors.projectDesc && <p className="error">{errors.projectDesc}</p>}*/}

                        <div className="field full">
                            <label className="request-form-label"
                                   style={{color: "black"}}
                            >Deadline (optioneel): </label><br/>
                            <input
                                type="date" name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="Input-hover"
                                style={{
                                    padding: "15px",
                                    width: "220px",
                                    height: "50px",
                                    marginLeft: "20px",
                                    fontSize: "16px",
                                    borderRadius: "7px",
                                    color: "darkgray",
                                    background: "transparent"
                                }}
                            />
                        </div>

                        <button className="submit-btn-requestAQuote">Aanvraag verzenden</button>
                    </form>
                </div>

            </div>
            <WhatsappFunction/>
            <TopButton/>
            <Footer/>
        </div>
    );
}

export default RequestAQuote;

