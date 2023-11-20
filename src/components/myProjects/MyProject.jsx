import React from 'react'
import './MyProject.css'
import PROFILE_IMAGE from '../../assets/images/home-right.png'

export const MyProject = () => {

    const cardData = [
        {
            title: "Title 1",
            description: "Node js backend project ",
            gitLink: "Git Link 1"
        },
        {
            title: "Title 2",
            description: "Desctiption 2",
            gitLink: "Git Link 2"
        },
        {
            title: "Title 3",
            description: "Desctiption 3",
            gitLink: "Git Link 3"
        },
        {
            title: "Title 4",
            description: "Desctiption 4",
            gitLink: "Git Link 4"
        }
    ]

    return (
        <>
            <div className="project-container">
                <div className="container">
                    <div className="project-heading">
                        <h1> My Project </h1>
                    </div>
                    <div className="row d-flex justify-content-center">
                        {cardData.map((element, index) => (
                            <div className="col-lg-3" key={index}>
                                <div className="card-body">
                                    <div className="card-content">
                                        <div className="card-image-container">
                                            <img src={PROFILE_IMAGE} className='card-image' alt="" />
                                        </div>
                                        <h4>{element.title}</h4>
                                        <p>{element.description}</p>
                                        {/* <h6>{element.gitLink}</h6> */}
                                        <button className="card-button">
                                            Repository
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}
