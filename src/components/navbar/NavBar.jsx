import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ICON from '../../assets/images/logo.png'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <header className='nav-container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={ICON} alt="Logo" width="50" height="40" className="d-inline-block align-text-top p-2" />
                            Coding
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Projects</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <div className="nav-icon-container">
                    <img src={ICON} className='nav-icon' alt="" />
                </div>
                <div className="nav-element-container">
                    <ul className="nav ">
                        <li class="nav-item item">
                            <a class="nav-link " aria-current="page" href="#">Link One</a>
                        </li>
                        <li class="nav-item item">
                            <a class="nav-link" href="#">Link Two</a>
                        </li>
                        <li class="nav-item item">
                            <a class="nav-link" href="#">Link Three</a>
                        </li>
                    </ul>
                </div> */}
            </header>
        </>
    )
}
