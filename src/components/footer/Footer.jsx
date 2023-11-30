import React from 'react'
import './Footer.css'
import EMAIL_ICON from '../../../src/assets/icons/mail.png'
import LOCATION_ICON from '../../../src/assets/icons/placeholder.png'
import PHONE_ICON from '../../../src/assets/icons/telephone.png'
import THANK_YOU_IMAGE from '../../../src/assets/images/thank-you.jpg'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 mt-5 mb-5">
                        <div className="profile-container">
                            <div className="prof-image">
                                {/* <img src="" alt="" /> */}
                                <div className="image"></div>
                            </div>
                            <div className="prof-text mt-5">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 mb-5">
                        <div className="contact-container">
                            <div className="header">
                                <h3>Contact</h3>
                            </div>
                            <div className="detail-container">
                                <div className="detail-block">
                                    <div className="icon-container">
                                        <img src={EMAIL_ICON} className='icon-img' alt="" />
                                    </div>
                                    <div className="icon-text">
                                        <p>Shubham@gmail.com</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="icon-container">
                                        <img src={PHONE_ICON} className='icon-img' alt="" />
                                    </div>
                                    <div className="icon-text">
                                        <p>+91 7972158985</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="icon-container">
                                        <img src={LOCATION_ICON} className='icon-img' alt="" />
                                    </div>
                                    <div className="icon-text">
                                        <p>INDIA, Maharashtra, Pune</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col-lg-4 mt-5 mb-5">
                        <div className="image-container">
                            <img src={THANK_YOU_IMAGE} className='img' alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
