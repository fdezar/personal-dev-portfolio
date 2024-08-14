import "./ResultsPage.css"

function ResultsPage() {

    return (
        <div>
            <header id="results-header">
                <div id="results-main-logo">
                    <a href="index.html">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" />
                    </a>
                </div>
                <div id="results-search-bar">
                    <input type="text" id="results-search-input" value="Gabriel Fernandez" />
                    <button id="results-search-button">Search</button>
                </div>
                <div id="results-header-right">
                    <a href="#">Gmail</a>
                    <a href="#">Images</a>
                    <div id="results-apps-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_white_24dp.png" alt="Google Apps" />
                    </div>
                    <div id="results-user-icon">
                        <img src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png" alt="User Icon" />
                    </div>
                </div>
            </header>
            <main id="results-main-section">
                <div id="results-info">
                    <p>About 1,230,000,000 results (0.45 seconds)</p>
                </div>
                <div id="tabs">
                    <a href="#" className="tab active">All</a>
                    <a href="#" className="tab">Images</a>
                    <a href="#" className="tab">Videos</a>
                    <a href="#" className="tab">News</a>
                    <a href="#" className="tab">Maps</a>
                    <a href="#" className="tab">More</a>
                </div>
                <div id="results">

                    <div id="featured-snippet">
                        <h2>Gabriel Fernandez</h2>
                        <p>Gabriel Fernandez is a Full Stack Developer specialized in MERN Stack, with freeCodeCamp, EDTeam, Google Activate and Udemy Certificates, and Ironhack.</p>
                        <a href="https://en.wikipedia.org/wiki/Monkey_D._Luffy" id="featured-snippet-url">en.wikipedia.org</a>
                    </div>
                    <div className="result">
                        <a href="#" className="result-title">Gabriel Fernandez - Wikipedia</a>
                        <a href="#" className="result-url">https://en.wikipedia.org/wiki/Gabriel_Fernandez</a>
                        <p className="result-snippet">Some info.</p>
                    </div>
                    <div className="result">
                        <a href="#" className="result-title">Gabriel - Programming Wiki - User</a>
                        <a href="#" className="result-url">https://programming.com/wiki/Gabriel</a>
                        <p className="result-snippet">Some info.</p>
                    </div>

                    <div id="images-section">
                        <h2>Images</h2>
                        <div id="images-container">
                            <img src="https://g.com/g1.jpg" alt="G1" />
                            <img src="https://g.com/g2.jpg" alt="G2" />
                            <img src="https://g.com/g3.jpg" alt="G3" />
                            <img src="https://g.com/g4.jpg" alt="G4" />
                        </div>
                    </div>
                    
                    <div id="news-section">
                        <h2>News</h2>
                        <div className="news-item">
                            <a href="#" className="news-title">Portfolio: My Latest Project</a>
                            <p className="news-snippet">Continuing my portfolio adventures.</p>
                            <a href="#" className="news-source">Gabriel News Network - 3 hours ago</a>
                        </div>
                        <div className="news-item">
                            <a href="#" className="news-title">Why this portfolio?</a>
                            <p className="news-snippet">Inspiring.</p>
                            <a href="#" className="news-source">Fernandez - 5 hours ago</a>
                        </div>
                    </div>
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