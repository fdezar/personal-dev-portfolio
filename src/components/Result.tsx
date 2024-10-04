import "./Result.css"

const Result = ({ result }) => {

    return (
        <div>
            <div className="result">
                <div id="result-header">
                    <div id="result-image-div">
                        <div id="result-image-border-circle">
                            <img src={result.image}/>
                        </div>
                    </div>
                    <div id="result-title-and-web">
                        <p>{result.header}</p>
                        <p>{result.url}</p>
                    </div>
                </div>
            {/* <a href="#" className="result-url">https://en.wikipedia.org/wiki/Gabriel_Fernandez</a> */}
                <a href="#" id="result-title">{result.title}</a>
                
                <p className="result-snippet">{result.description}</p>
            </div>
        </div>
    )
}

export default Result;