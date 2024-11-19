import "./ClassicResult.css"
import { Link } from "react-router-dom";

interface ClassicResultProps {
    result: {
        title: string;
        url: string;
        link: string;
        description: string;
    };
}

const ClassicResult: React.FC<ClassicResultProps> = ({ result }) => {

    return (
        <div className="result">
            <Link to={result.link} id="react-router-link">
                <p className="classic-result-title">{result.title}</p>
                <p className="result-url">{result.url}</p>
            </Link>
            <p className="result-snippet">{result.description}</p>
        </div>
    )
}

export default ClassicResult;