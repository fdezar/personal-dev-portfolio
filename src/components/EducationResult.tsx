import "./Result.css"

interface EducationResultProps {
    result: {
        image: string;
        header: string;
        subheader: string;
        url: string;
        title: string;
        description: string;
    };
}

const EducationResult: React.FC<EducationResultProps> = ({ result }) => {

    return (
        <div>
            <div className="result">
                <a href={result.url} id="result-a">
                <div id="result-header">
                    <div id="result-image-div">
                        <div id="result-image-border-circle">
                            <img src={result.image}/>
                        </div>
                    </div>
                    <div id="result-title-and-web">
                        <p>{result.header}</p>
                        <p>{result.subheader}</p>
                    </div>
                </div>
            {/* <a href="#" className="result-url">https://en.wikipedia.org/wiki/Gabriel_Fernandez</a> */}
                <h3 id="result-title">{result.title}</h3>
                </a>
                
                <p className="result-snippet" dangerouslySetInnerHTML={{ __html: result.description.replace(/\n/g, '<br/>') }}></p>
            </div>
        </div>
    )
}

export default EducationResult;