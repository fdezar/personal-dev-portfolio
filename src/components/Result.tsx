import "./Result.css"

interface ResultProps {
    result: {
        image: string;
        header: string;
        subheader: string;
        url: string;
        title: string;
        description: string;
    };
}

const Result: React.FC<ResultProps> = ({ result }) => {

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
                <h3 id="result-title">{result.title}</h3>
                </a>
                
                <p className="result-snippet" dangerouslySetInnerHTML={{ __html: result.description.replace(/\n/g, '<br/>') }}></p>
            </div>
        </div>
    )
}

export default Result;