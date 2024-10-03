const resumeArray = [
    {
        title: "My Projects",
        url: "/projects",
        description: "See some of my projects!"
    },
    {
        title: "My Skills",
        url: "/skills",
        description: "React, NodeJS, ExpressJS, TypeScript"
    },
    {
        title: "My Education",
        url: "https://projects",
        description: "See some of my projects!"
    },
    {
        title: "What I'm working on right now?",
        url: "https://www.github.com/fdezar",
        description: "See some of my projects!"
    },
    {
        title: "My latest LinkedIn publications",
        url: "https://www.linkedin.com/in/gabrielfdez",
        description: "Sometimes I share my activity on LinkedIn. Watch out the latest!"
    },

]

function ResumePage() {

    return (
        <>
            <div id="featured-snippet">
                <h2>Gabriel Fernandez</h2>
                <p>Full Stack Developer</p>
                {/* <a href="https://en.wikipedia.org/wiki/Gabriel_Fernandez" id="featured-snippet-url">en.wikipedia.org</a> */}
            </div>

            <section id="images-section">
                <div id="images-container">
                    <img src="/src/assets/images/results-page/gabri-ironhack-image.png" id="images-main-image" alt="G1" />
                    <div id="images-subcontainer">
                        <img src="/src/assets/images/results-page/silk-project.png" id="images-second-image" alt="G2" />
                        <img src="/src/assets/images/results-page/exquisite-project.png" id="images-third-image" alt="G3" />
                    </div>
                </div>
                <div id="featured-app">
                    <div>Imagen
                        <img />
                    </div>
                    <div>
                        <h5>Featured site</h5>
                        <p>Silk: </p>
                    </div>
                </div>
            </section>

            <hr />

            <div className="result">
                <a href="#" className="result-title">My Projects</a>
                <a href="#" className="result-url">https://en.wikipedia.org/wiki/Gabriel_Fernandez</a>
                <p className="result-snippet">Some info.</p>
            </div>
            <div className="result">
                <a href="#" className="result-title">My Skills</a>
                <a href="#" className="result-url">https://programming.com/wiki/Gabriel</a>
                <p className="result-snippet">Some info.</p>
            </div>
        
            <section id="news-section">
                <h2>News</h2>
                <div className="news-item">
                    <a href="#" className="news-title">What I'm working on right now?</a>
                    <p className="news-snippet">Continuing my portfolio adventures.</p>
                    <a href="#" className="news-source">Gabriel News Network - 3 hours ago</a>
                </div>
                <div className="news-item">
                    <a href="#" className="news-title">My latest LinkedIn publications</a>
                    <p className="news-snippet">Inspiring.</p>
                    <a href="#" className="news-source">Fernandez - 5 hours ago</a>
                </div>
            </section>

            <aside>
                <div>

                </div>
                <div>

                </div>
                <div>
                    <div>
                        Localización
                    </div>
                    <div>
                        Ocupación
                    </div>
                    <div>
                        Áreas más dominantes
                    </div>
                </div>
                <hr></hr>
                <div>
                    Want to work with me?
                </div>
                <button>Contact</button>
            </aside>
        </>
    )
}

export default ResumePage;