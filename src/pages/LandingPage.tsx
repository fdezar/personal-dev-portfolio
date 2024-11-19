import "./LandingPage.css";
import TypingEffect from "../components/TypingEffect";
import { Link } from 'react-router-dom';
import GaabriLogo from "/src/assets/images/gaabri-logo.png";
import UserImage from "/src/assets/images/gabri-user-image.png"

function LandingPage() {

    return (
        <div id="landing-main-div">
            <header id="landing-header">
                <div id="landing-header-right">
                    <a href="https://www.github.com/fdezar">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabrielfdez">LinkedIn</a>
                    <div id="landing-apps-icon">
                        <Link to="/results/projects" id="landing-apps-link">
                            <span className="material-symbols-outlined">apps</span>
                        </Link>
                    </div>
                    <div id="landing-user-icon">
                        <Link to="/results">
                        <img src={UserImage} alt="User Icon" />
                        </Link>
                    </div>
                </div>
            </header>
            <main id="landing-main">
                <div id="landing-logo">
                    <img src={GaabriLogo} alt="Gaabri Logo" />
                </div>
                <div id="landing-search-bar">
                <span className="material-symbols-outlined search-icon">search</span>
                    <TypingEffect />
                </div>
                <div id="landing-main-buttons">
                    <Link to="/results" className="styled-link"><button id="landing-search-button">Gaabri Search</button></Link>
                    <a href="/public/downloads/curriculum-gabriel-fernandez.pdf" download><button id="landing-lucky-button">Download CV</button></a>
                </div>
            </main>
            <footer id="landing-footer">
                <div id="landing-footer-top">
                    <p>Barcelona</p>
                </div>
                <div id="landing-footer-bottom">
                    <div id="landing-footer-links-left">
                        <p>Google UI Inspired Portfolio</p>
                    </div>
                    <div id="landing-footer-links-right">
                        <p><Link to="https://www.linkedin.com/in/gabrielfdez" className="styled-link">Made by Gabriel Fernandez</Link></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage;