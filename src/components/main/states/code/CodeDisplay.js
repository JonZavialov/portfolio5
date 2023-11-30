import { CodeBlock, dracula } from 'react-code-blocks';

function CodeDisplay({ content, language }){
    return (
        <div  id="code-block-container">
            <CodeBlock
                text={content}
                language={language}
                theme={dracula}
            />
        </div>
    )
}

export default CodeDisplay;
