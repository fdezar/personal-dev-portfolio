function ResumePage() {

    return (
        <>
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
        </>
    )
}

export default ResumePage;