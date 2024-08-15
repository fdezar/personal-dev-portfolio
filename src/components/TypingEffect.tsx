import { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState('');
    const fullText = "Passionate Full Stack Web Developer.";
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
                setTimeout(type, typingSpeed);
            }
        };

        type();
    }, []);

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder={text} 
                className="landing-search-input"
                id="landing-search-input"
                readOnly
            />
        </div>
    );
};

export default TypingEffect;

