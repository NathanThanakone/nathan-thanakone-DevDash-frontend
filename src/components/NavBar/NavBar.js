import "./NavBar.scss";
import { Link } from "react-router-dom";
import profilePic from "../../assets/images/profilepic.jpeg";
import { MdSpaceDashboard, MdTimer } from 'react-icons/md';
import { GiAchievement } from 'react-icons/gi';
import logo from "../../assets/images/devdash-logo.svg";

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav__logo">
                <div className="nav__logo-container">
                    <img src={logo} alt="logo" className="nav__logo-icon"></img>
                    <h1 className="nav__logo">DevDash</h1>
                </div>
            </Link>
            <img className="nav__profilePic" src={profilePic} alt="profile pic icon"></img>
            <p className="nav__username">Nathan Thanakone</p>
            <section className="nav__category-container">
                <div className="nav__category-subcontainer">
                    <Link to="/" className="nav__icon--link"><MdSpaceDashboard className="nav__icon"/><span className="nav__category">Dashboard</span></Link>
                </div>
                <div className="nav__category-subcontainer">
                    <Link to="/goals" className="nav__icon--link"><GiAchievement className="nav__icon"/><span className="nav__category">Goals</span></Link>
                </div>
                <div className="nav__category-subcontainer">
                    <Link to="/timer" className="nav__icon--link"><MdTimer className="nav__icon"/><span className="nav__category">Focus!</span></Link>
                </div>
            </section>
            <p className="nav__creator">Made by Nathan Thanakone</p>
        </nav>
    )
}

export default NavBar;