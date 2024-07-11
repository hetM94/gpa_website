import React from 'react';
import GPAImage from '../../../../gpa_website/src/assets/images/GPA.png'; // Correct relative path to image
import MenuIcon from '../../../../gpa_website/src/assets/images/menu-icon.png'; // Correct relative path to image

const Header = () => (
    <header id="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                <a className="navbar-brand p-0 m-0" href="#">
                    <img src={GPAImage} alt="GPA Logo" width="128px" height="128px"/>
                </a>

                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <img src={MenuIcon} alt="nav-icon"
                             className="nav-img"/>
                    </span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Institute</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Academics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Campus Life</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Placement</a>
                        </li>
                    </ul>

                    <a className="btn nav-btn" href="#">Login</a>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;