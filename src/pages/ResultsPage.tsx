import "./ResultsPage.css"
import ResumePage from "./ResumePage";
import ProjectsPage from "./ProjectsPage";
import EducationPage from "./EducationPage";
import SkillsPage from "./SkillsPage";
import ExperiencePage from "./ExperiencePage";
import ContactPage from "./ContactPage";
import { Link, Routes, Route, useLocation } from 'react-router-dom';

function ResultsPage() {
    const location = useLocation();

    return (
        <div>
            <header id="results-header">
                <div id="results-main-logo">
                    <a href="index.html">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" />
                    </a>
                </div>
                <div id="results-search-bar">
                    <input type="text" id="results-search-input" value="Passionate Full Stack Web Developer." readOnly/>
                    <button id="results-search-button">Search</button>
                </div>
                <div id="results-header-right">
                    <a href="#">Gmail</a>
                    <a href="#">Images</a>
                    <div id="results-apps-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_white_24dp.png" alt="Google Apps" />
                    </div>
                    <div id="results-user-icon">
                        <img src="/src/assets/images/results-page/gabri-user-image.png" alt="User Icon" />
                    </div>
                </div>
            </header>
            <main id="results-main-section">
                <div id="results-info">
                    <p>About 1,230,000,000 results (0.45 seconds)</p>
                </div>
                <div id="tabs">
                    <Link to="/results" className="tab active">Resume</Link>
                    <Link to="/results/projects" className="tab">Projects</Link>
                    <Link to="/results/education" className="tab">Education</Link>
                    <Link to="/results/skills" className="tab">Skills</Link>
                    <Link to="/results/experience" className="tab">Experience</Link>
                    <Link to="/results/contact" className="tab">Contact</Link>
                </div>
                <div id="results">
                   <Routes location={location}>
                        <Route path="/" element={<ResumePage />} />
                        <Route path="projects" element={<ProjectsPage />} />
                        <Route path="education" element={<EducationPage />} />
                        <Route path="skills" element={<SkillsPage />} />
                        <Route path="experience" element={<ExperiencePage />} />
                        <Route path="contact" element={<ContactPage />} />
                   </Routes>
                </div>
            </main>
            <footer id="results-footer">
                <div id="results-footer-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Settings</a>
                </div>
            </footer>
        </div>
    )
}

export default ResultsPage;