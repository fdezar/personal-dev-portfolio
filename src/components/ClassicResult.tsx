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
            <a href="#" className="classic-result-title">{result.title}</a>
            <a href="#" className="result-url">{result.url}</a>
            <p className="result-snippet">{result.description}</p>
        </div>
    )
}

export default ClassicResult;