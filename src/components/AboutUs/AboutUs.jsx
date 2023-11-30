import React from 'react'
import "./AboutUs.css"
import RESUME from '../../assets/file/Shubham_Kamble_Resume.pdf'
import PANIO from '../../assets/images//3d-playing-piano.jpg'

export const AboutUs = () => {
    const urlPath = "https://drive.google.com/file/d/1OVthspip51mdXUXjST2MOaZ6JXQ3eUFW/view?usp=drivesdk"
    // const handleOpenPdf = () => {
    //     const path = "../../assets/file/Shubham_Kamble_Resume.pdf"
    //     window.open(path, '_blank')
    // }

    return (
        <>
            <div className="about-container">
                <div className="container">
                    <div className="row about-row">
                        <div className="col-lg-5">
                            <div className="image-container">
                                <img src={PANIO} className='about-image' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="intro-container">
                                <div className="head-text">
                                    <p>SHORT</p>
                                    <p>INTRODUCTION ABOUT</p>
                                    <p>MY SELF</p>
                                </div>
                                <div className="para-text">
                                    <p>
                                        👋 Hello, I'm Shubham, a passionate Software Developer with a solid educational foundation, holding a BSc in Computer Science and an MSc in Computer Application. Over the course of my career, I've accumulated valuable experience, starting with a 6-month internship as an intern software developer and progressing to a year-long role as a junior software developer.
                                        <br /><br />
                                        🚀 My skills span a range of technologies, and I specialize in Java, JavaScript, Python, HTML, and CSS, with a keen interest and expertise in Frontend Designing. I thrive on turning ideas into innovative solutions , and my hands-on experience allows me to navigate the ever-evolving landscape of software development with confidence.

                                    </p>
                                    <span>Let's build something incredible together! </span>💻✨
                                </div>
                                <div className="resume-button-block">
                                    <a href={urlPath} target="_blank" rel="noopener noreferrer">
                                        <button className="resume-button">Open Resume</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
