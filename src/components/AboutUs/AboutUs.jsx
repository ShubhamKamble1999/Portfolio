import React from 'react'
import "./AboutUs.css"
import RESUME from '../../assets/file/Shubham_Kamble_Resume.pdf'

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
                    <div className="about-header">
                        <h1> About me </h1>
                    </div>
                    <div className="about-para d-flex justify-content-center">
                        <div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ratione deserunt velit alias odio. Aperiam iusto, consequatur vitae error corrupti eum omnis possimus expedita ullam nihil quae at fugiat praesentium.
                            </p>
                        </div>
                    </div>
                    <div className="resume-button-container">
                        {/* <button
                            className="resume-button"
                            onClick={handleOpenPdf}
                        >
                            See my resume
                        </button> */}
                        <a href={urlPath} target="_blank" rel="noopener noreferrer">
                            <button className="resume-button">Open Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
