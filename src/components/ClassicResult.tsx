import "./ClassicResult.css"

interface ClassicResultProps {
    result: {
        title: string;
        url: string;
        description: string;
    };
}

const ClassicResult: React.FC<ClassicResultProps> = ({ result }) => {

    return (
        <div className="result">
            <a href={result.url} className="classic-result-title">{result.title}</a>
            <a href={result.url} className="result-url">{result.url}</a>
            <p className="result-snippet">{result.description}</p>
        </div>
    )
}

export default ClassicResult;