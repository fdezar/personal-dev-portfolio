import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
    const [text, setText] = useState(''); // Estado inicial del texto vacío
    const fullText = "Passionate Full Stack Web Developer.";
    const typingSpeed = 100; // Velocidad de escritura en ms

    useEffect(() => {
        let index = 0;

        const type = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1)); // Actualiza con el texto hasta el índice actual
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
                className="landing-search-input"  /* Clase agregada */
                id="landing-search-input"          /* ID agregado */
                readOnly
            />
        </div>
    );
};

export default TypingEffect;

