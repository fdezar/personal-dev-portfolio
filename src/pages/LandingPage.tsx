import "./LandingPage.css";
import TypingEffect from "../components/TypingEffect";
import { Link } from 'react-router-dom';

function LandingPage() {

    return (
        <div id="landing-main-div">
            <header id="landing-header">
                {/* <div id="landing-header-left">
                    <a href="#">About</a>
                    <a href="#">Store</a>
                </div> */}
                <div id="landing-header-right">
                    <a href="https://www.github.com/fdezar">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabrielfdez">LinkedIn</a>
                    <span className="material-symbols-outlined">apps</span>
                    {/* <div id="landing-apps-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_white_24dp.png" alt="Google Apps" />
                    </div> */}
                    <div id="landing-user-icon">
                        <Link to="/results">
                        {/* <img src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="User Icon" /> */}
                        <img src="/src/assets/images/landing-page/gabri-user-image.png" alt="User Icon" />
                        </Link>
                    </div>
                </div>
            </header>
            <main id="landing-main">
                <div id="landing-logo">
                    {/* <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" /> */}
                    <img src="../../src/assets/images/landing-page/gabri-logo.png" alt="Google Logo" />
                </div>
                <div id="landing-search-bar">
                <span className="material-symbols-outlined search-icon">search</span>
                    <TypingEffect />
                    {/* <input type="text" id="landing-search-input" /> */}
                    {/* <div id="landing-search-icons">
                        <img src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Mic Icon" />
                        <img src="https://www.gstatic.com/images/branding/product/1x/search_icon_white_24dp.png" alt="Search Icon" />
                    </div> */}
                </div>
                <div id="landing-main-buttons">
                    <Link to="/results" className="styled-link"><button id="landing-search-button">Gaabri Search</button></Link>
                    <button id="landing-lucky-button">Download CV</button>
                </div>
            </main>
            <footer id="landing-footer">
                <div id="landing-footer-top">
                    <p>Spain</p>
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