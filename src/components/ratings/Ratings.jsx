import React from 'react'
import './Ratings.css'

export const Ratings = (props) => {
    const data = props.elements
    console.log("DATA :: ", data);

    return (
        <>

            {data.map((element, index) => (
                <div>
                    <div className="range-block">
                        <div className="detail-block">
                            <span>{element.title}</span>
                        </div>
                        <div className="rate-block">
                            <span>{element.rating} / 10</span>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="bar">
                            <div className="ra" style={{ width: `${element.score}` }}></div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
