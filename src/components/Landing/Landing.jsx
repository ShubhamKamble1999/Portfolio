import React, { useEffect, useState } from 'react'
import './Landing.css'
import JAVA_IMAGE from '../../assets/images/java.png'
import PYTHON_IMAGE from '../../assets/images/python.png'
import NODE_IMAGE from '../../assets/images/nodeJs.png'
import MYSQL_IMAGE from '../../assets/images/mysql.png'
import PROFILE_IMAGE from '../../assets/images/home-right.png'

export const Landing = () => {

    const [suffix, setSuffix] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const word = "React Developer"
    const words = ["Java", "SpringBoot", "JavaScrpit", "NodeJs", "ReactJs", "Python"]
    useEffect(() => {
        let currentIndex = 0;
        const currentWord = words[currentWordIndex];

        if (currentIndex <= currentWord.length) {
            const interval = setInterval(() => {
                setSuffix(currentWord.slice(0, currentIndex));
                currentIndex++;
                if (currentIndex > currentWord.length) {
                    if (currentWordIndex < words.length - 1) {
                        setCurrentWordIndex(currentWordIndex + 1);
                    } else {
                        setCurrentWordIndex(0)
                    }

                }
            }, 250);

            return () => {
                clearInterval(interval);
            };
        } else {
            // Move to the next word when the current word is fully displayed
            if (currentWordIndex < words.length - 1) {
                console.log(" I am here");
            }
        }
    }, [currentWordIndex]);


    return (
        <>
            <div className="landing-container">
                <div className="container">
                    <div className="row landing-row">
                        <div className="col-lg-6 left-col">
                            <div className="left-container">
                                <span className="header-text">
                                    Shubham Kamble
                                </span>
                                <span className='header-text-suffix'>{suffix}</span>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repudiandae nesciunt
                                    doloremque. Qui soluta nihil mollitia reprehenderit dicta, quos quisquam blanditiis
                                    repellendus tempore cupiditate magni at dignissimos corporis veniam sunt.
                                </p>
                                <div class="icons-block">
                                    <img src={JAVA_IMAGE} alt="" className="icon-img" />
                                    <img src={PYTHON_IMAGE} alt="" className="icon-img" />
                                    <img src={NODE_IMAGE} alt="" className="icon-img" />
                                    <img src={MYSQL_IMAGE} alt="" className="icon-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right-col">
                            <div className="profile-image-container">
                                <img src={PROFILE_IMAGE} className='profile-image' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
