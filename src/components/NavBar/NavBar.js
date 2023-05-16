import "./NavBar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePic from "../../assets/images/profilepic.jpeg";
import { MdSpaceDashboard, MdTimer } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import logo from "../../assets/images/devdash-logo.svg";

function NavBar() {
    const [showContactModal, setShowContactModal] = useState(false);

    function showModal() {
        setShowContactModal(!showContactModal);
    }

    return (
        <nav className="nav">
            <Link to="/dashboard" className="nav__link">
                <div className="nav__logo-container">
                    <img src={logo} alt="logo" className="nav__logo-icon"></img>
                    <h1 className="nav__logo">DevDash</h1>
                </div>
            </Link>
            <img className="nav__profilePic" src={profilePic} alt="profile pic icon"></img>
            <p className="nav__username">Nathan Thanakone</p>

            <section className="nav__category-container">
                <div className="nav__category-subcontainer">
                    <NavLink to="/dashboard" id="dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><MdSpaceDashboard className="nav__icon"/><span className="nav__category">Dashboard</span></NavLink>
                </div>
                <div className="nav__category-subcontainer">
                    <NavLink to="/goals" id="goals" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><GiAchievement className="nav__icon"/><span className="nav__category">Goals</span></NavLink>
                </div>
                <div className="nav__category-subcontainer">
                    <NavLink to="/timer" id="timer" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><MdTimer className="nav__icon"/><span className="nav__category">Focus!</span></NavLink>
                </div>
            </section>
            <footer className="nav__category-footer-container">
                <p className="nav__creator">Made by Nathan Thanakone</p>
                <div className="nav__modal" onClick={showModal}>Contact me!</div>

                {showContactModal && (
                    <div className="modal">
                        <div className="modal__info-container">
                            <h2 className="modal__text">Contact Information</h2>
                            <p className="modal__text">Nathan Thanakone</p>
                            <p className="modal__text">nathan.thanakone@gmail.com</p>
                            <a href="https://github.com/NathanThanakone" target="_blank" rel="noreferrer" className="modal__links">GitHub</a>
                            <a href="https://linkedin.com/in/nathanthanakone/" target="_blank" rel="noreferrer" className="modal__links">LinkedIn</a>
                            <button onClick={showModal} className="modal__button">Close</button>
                        </div>
                  </div>
                )}
            </footer>
        </nav>
    )
}

export default NavBar;