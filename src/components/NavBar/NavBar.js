import "./NavBar.scss";
import profilePic from "../../assets/images/profilepic.jpeg";
import { MdSpaceDashboard } from 'react-icons/md';
import { BsListTask } from 'react-icons/bs';
import { GiAchievement } from 'react-icons/gi';

function NavBar() {
    return (
        <nav className="nav">
            <h1 className="nav__logo">DevDash</h1>
            <img className="nav__profilePic" src={profilePic} alt="profile pic icon"></img>
            <p className="nav__username">Nathan Thanakone</p>
            <section className="nav__category-container">
                <div className="nav__category-subcontainer">
                    <MdSpaceDashboard className="nav__icon"/><span className="nav__category">Dashboard</span>
                </div>
                <div className="nav__category-subcontainer">
                    <BsListTask className="nav__icon"/><span className="nav__category">Tasks</span>
                </div>
                <div className="nav__category-subcontainer">
                    <GiAchievement className="nav__icon"/><span className="nav__category">Goals</span>
                </div>
            </section>
            <p className="nav__creator">Made by Nathan Thanakone</p>
        </nav>
    )
}

export default NavBar;