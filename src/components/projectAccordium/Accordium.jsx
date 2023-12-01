import React from 'react'
import './Accordium.css'

const Accordium = () => {

    const cardData = [
        {
            title: "Title 1",
            description: "11 It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. ",
            gitLink: "https://github.com/hiteshchoudhary/chai-backend"
        },
        {
            title: "Title 2",
            description: "22 It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
            gitLink: "https://getbootstrap.com/docs/5.3/components/accordion/#how-it-works"
        },
        {
            title: "Title 3",
            description: "33 It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
            gitLink: "https://mail.google.com/mail/u/0/#inbox"
        },
        {
            title: "Title 4",
            description: "44 It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
            gitLink: "https://ineuron.ai/"
        }
    ]


    return (
        <>
            <div className="container">
                <div className="project-container">
                    <div className="project-heading">
                        <span> My Projects </span>
                    </div>
                    <div className='d-flex justify-content-center m-4'>
                        <div className="accordion accordium-width" id="accordionExample">
                            {cardData.map((element, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                            {element.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className={`accordion-collapse accordium-width collapse ${index === 0 ? 'show' : ''}`}
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-4 d-flex justify-content-center">
                                                    <div className="left-accor"></div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <div><strong>{element.title}</strong></div>
                                                    <div>{element.description}</div>
                                                    <div><a href={element.gitLink}>{element.gitLink}</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Accordium