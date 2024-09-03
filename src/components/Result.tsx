import "./Result.css"

const Result = ({ project }) => {

    return (
        <div>
            <div className="result">
                <div id="result-header">
                    <div id="result-image-div">
                        <div id="result-image-border-circle">
                            <img src="/src/assets/images/projects-page/silk-logo.png"/>
                        </div>
                    </div>
                    <div id="result-title-and-web">
                        <p>{project.header}</p>
                        <p>https://silk-project.vercel.app</p>
                    </div>
                </div>
            {/* <a href="#" className="result-url">https://en.wikipedia.org/wiki/Gabriel_Fernandez</a> */}
                <a href="#" className="result-title">Silk: Your Productivity App</a>
                
                <p className="result-snippet">Silk is a React and Vite app that lets you...</p>
            </div>
        </div>
    )
}

export default Result;