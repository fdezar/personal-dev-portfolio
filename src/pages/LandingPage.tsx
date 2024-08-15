import "./LandingPage.css";
import TypingEffect from "../components/TypingEffect";

function LandingPage() {

    return (
        <div id="landing-main-div">
            <header id="landing-header">
                {/* <div id="landing-header-left">
                    <a href="#">About</a>
                    <a href="#">Store</a>
                </div> */}
                <div id="landing-header-right">
                    <a href="#">Gmail</a>
                    <a href="#">Projects</a>
                    <div id="landing-apps-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_white_24dp.png" alt="Google Apps" />
                    </div>
                    <div id="landing-user-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="User Icon" />
                    </div>
                </div>
            </header>
            <main id="landing-main">
                <div id="landing-logo">
                    {/* <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" /> */}
                    <img src="../../src/assets/images/landing-page/gabri-logo.png" alt="Google Logo" />
                </div>
                <div id="landing-search-bar">
                    <TypingEffect />
                    {/* <input type="text" id="landing-search-input" /> */}
                    <div id="landing-search-icons">
                        <img src="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" alt="Mic Icon" />
                        <img src="https://www.gstatic.com/images/branding/product/1x/search_icon_white_24dp.png" alt="Search Icon" />
                    </div>
                </div>
                <div id="landing-main-buttons">
                    <button id="landing-search-button">Gaabri Search</button>
                    <button id="landing-lucky-button">Download CV</button>
                </div>
            </main>
            <footer id="landing-footer">
                <div id="landing-footer-top">
                    <p>Spain</p>
                </div>
                <div id="landing-footer-bottom">
                    <div id="landing-footer-links-left">
                        <a href="#">Google UI Inspired Portfolio</a>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                    <div id="landing-footer-links-right">
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Settings</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage;