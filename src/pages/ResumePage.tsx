function ResumePage() {

    return (
        <>
            <div id="featured-snippet">
                <h2>Gabriel Fernandez</h2>
                <p>Full Stack Developer</p>
                {/* <a href="https://en.wikipedia.org/wiki/Gabriel_Fernandez" id="featured-snippet-url">en.wikipedia.org</a> */}
            </div>

            <div id="images-section">
                <div id="images-container">
                    <img src="/src/assets/images/results-page/gabri-ironhack-image.png" id="images-main-image" alt="G1" />
                    <div id="images-subcontainer">
                        <img src="/src/assets/images/results-page/silk-project.png" id="images-second-image" alt="G2" />
                        <img src="/src/assets/images/results-page/exquisite-project.png" id="images-third-image" alt="G3" />
                    </div>
                </div>
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
        </>
    )
}

export default ResumePage;