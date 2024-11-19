import "./ResultsPage.css"
import ResumePage from "./ResumePage";
import ProjectsPage from "./ProjectsPage";
import EducationPage from "./EducationPage";
import SkillsPage from "./SkillsPage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import GaabriLogo from "/src/assets/images/gaabri-logo.png";
import UserImage from "/src/assets/images/gabri-user-image.png";
import GaaaabriLogo from "/src/assets/images/results-page/gaaaabri-logo.png";

function ResultsPage() {
    const location = useLocation();

    const isActive = (pathname: string) => location.pathname === pathname;

    return (
        <div>
            <header id="results-header">
                <div id="results-main-logo">
                    <Link to="/">
                        <img src={GaabriLogo} alt="Gaabri Logo" />
                    </Link>
                </div>
                <div id="results-search-bar">
                    <input type="text" id="results-search-input" value="Passionate Full Stack Web Developer." readOnly/>
                    <button id="results-search-button">Search</button>
                </div>
                <div id="results-header-right">
                    <a href="https://www.github.com/fdezar">GitHub</a>
                    <a href="https://www.linkedin.com/in/gabrielfdez">LinkedIn</a>
                    <div id="results-apps-icon">
                        <Link to="/results/projects" id="results-apps-link">
                            <span className="material-symbols-outlined">apps</span>
                        </Link>
                    </div>
                    <div id="results-user-icon">
                        <img src={UserImage} alt="User Icon" />
                    </div>
                </div>
            </header>
            <main id="results-main-section">
                <nav id="tabs">
                    <Link to="/results" className={`tab ${isActive('/results') ? 'active' : ''}`}>Resume</Link>
                    <Link to="/results/projects" className={`tab ${isActive('/results/projects') ? 'active' : ''}`}>Projects</Link>
                    <Link to="/results/education" className={`tab ${isActive('/results/education') ? 'active' : ''}`}>Education</Link>
                    <Link to="/results/skills" className={`tab ${isActive('/results/skills') ? 'active' : ''}`}>Skills</Link>
                    <Link to="/results/experience" className={`tab ${isActive('/results/experience') ? 'active' : ''}`}>Experience</Link>
                    <Link to="/results/contact" className={`tab ${isActive('/results/contact') ? 'active' : ''}`}>Contact</Link>
                </nav>
                <section id="results">
                   <Routes location={location}>
                        <Route path="/" element={<ResumePage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="education" element={<EducationPage />} />
                        <Route path="skills" element={<SkillsPage />} />
                        <Route path="experience" element={<ExperiencePage />} />
                        <Route path="contact" element={<ContactPage />} />
                   </Routes>
                </section>
                <div id="results-gaaaabri">
                        <img src={GaaaabriLogo} id="gaaaabri-logo" />
                        <Link to="/results" id="results-gaaaabri-link">1</Link>
                </div>
            </main>
            <footer id="results-footer">
                <div id="results-footer-links">
                    <a href="https://www.linkedin.com/in/gabrielfdez">Made by Gabriel Fernandez</a>
                </div>
            </footer>
        </div>
    )
}

export default ResultsPage;