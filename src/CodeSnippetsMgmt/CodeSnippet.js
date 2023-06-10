import { Highlight, themes } from "prism-react-renderer";
import { Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';

const keyToCode = {
    1: {
        name: "test1.js",
        codeBlock: `
        const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
          return (
            <div>
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          );
        }
        `
    },
    2: {
        name: "test2.java",
        codeBlock: `
        class Main {
            public static void main(String[] args) {
              int first = 10;
              int second = 20;
              int sum = first + second;
              System.out.println(first + " + " + second + " = "  + sum);
            }
          }
        `
    }
}

const CodeSnippet = ({ showingKey, setShowingKey }) => {
    return (
        <>
            <Button
                type="link"
                icon={<ArrowLeftOutlined />}
                onClick={(_) => setShowingKey(-1)}
            >
                Back
            </Button>
            <div className="header">{keyToCode[showingKey].name}</div>
            <Highlight
                theme={themes.github}
                code={keyToCode[showingKey].codeBlock}
                language="tsx"
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                <span>{i + 1}</span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </>);
}

export default CodeSnippet;
