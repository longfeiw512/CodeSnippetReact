import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

const PrismCode = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
}

export default PrismCode;