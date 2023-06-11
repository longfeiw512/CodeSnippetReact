import Prism from "prismjs";
import { Button, Select } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";

const keyToCode = {
    1: {
        name: "test1.js",
        language: "javascript",
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
        language: "java",
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

const themeCssPath = "../themes-css/prism-theme-";

const themes = [
    "coy",
    "default",
    "dark",
    "funky",
    "okaidia",
    "solarized-light",
    "tomorrow-night",
    "twilight"
];

const themeToCss = themes.reduce((prev, curr) => ({
    ...prev,
    [curr]: `${themeCssPath + curr}.css`
}), {});

const themeSelectOptions = themes.map(theme => ({
    value: theme,
    label: theme.replace("-", " ")
}));

const defaultTheme = "default";

const CodeSnippet = ({ showingKey, setShowingKey }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    const [theme, setTheme] = useState(themeToCss[defaultTheme]);

    const onChangeTheme = (value) => {
        setTheme(themeToCss[value]);
    }

    return (
        <>
            <link rel="stylesheet" type="text/css" href={theme} />
            <Button
                type="link"
                icon={<ArrowLeftOutlined />}
                onClick={(_) => setShowingKey(-1)}
            >
                Back
            </Button>
            <div className="header">{keyToCode[showingKey].name}</div>
            <Select
                defaultValue={defaultTheme}
                style={{ width: 180, paddingLeft: 20 }}
                onChange={onChangeTheme}
                options={themeSelectOptions}
            />
            <div>
                <pre className="line-numbers">
                    <code className={[
                        `language-${keyToCode[showingKey].language}`,
                    ]}>
                        {keyToCode[showingKey].codeBlock}
                    </code>
                </pre>
            </div>
        </>);
}

export default CodeSnippet;
