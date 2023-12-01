import React from 'react'
import './Skills.css'
import { Ratings } from '../ratings/Ratings'

export const Skills = () => {

    const markers = [
        {
            title: "HTML",
            rating: 9,
            score: "90%"
        },
        {
            title: "CSS",
            rating: 9,
            score: "90%"
        },
        {
            title: "JAVASCRIPT",
            rating: 7,
            score: "70%"
        },
        {
            title: "JAVA",
            rating: 8,
            score: "80%"
        },
        {
            title: "NodeJs",
            rating: 8,
            score: "80%"
        },
        {
            title: "ReactJS",
            rating: 6,
            score: "60%"
        }
    ]

    return (
        <div className='black-box '>
            <div className="container ">
                <div className="row black-row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="text-container">
                            <div className="header-block">
                                <h4>Education</h4>
                            </div>
                            <div className="education-block">
                                <div className="card">
                                    <div className="card-header">
                                        Fergusson College
                                    </div>
                                    <div className="card-elements">
                                        <h5 className="card-title">BSc. Computer Science</h5>
                                        <p className="card-text">2017 - 2020</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        Fergusson College
                                    </div>
                                    <div className="card-elements">
                                        <h5 className="card-title">MSc. Computer Application</h5>
                                        <p className="card-text">2020 - 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-12">
                        <Ratings elements={markers} />
                        {/* <div className="range-block">
                            <div className="detail-block">
                                <span>HTML</span>
                            </div>
                            <div className="rate-block">
                                <span>9 / 10</span>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="bar">
                                <div className="ra" style={{ width: '50%' }}></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}
