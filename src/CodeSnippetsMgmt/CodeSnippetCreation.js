import React from "react";
import { Button, Input, Select, Space } from "antd";
import reactCSS from "reactcss";

const styles = reactCSS({
    "default": {
        container: {
            padding: "20px 20px 20px 20px"
        },
        header: {
            fontSize: 28,
            fontWeight: "bold",
            paddingBottom: 20
        },
        languageSelect: {
            marginRight: 20,
            width: 120
        },
        footer: {
            marginTop: 20
        }
    }
});

const { TextArea } = Input;

const OPTIONS = [
    { value: "css", label: "CSS" },
    { value: "html", label: "HTML" },
    { value: "java", label: "JAVA" },
    { value: "javascript", label: "JavaScript" }
];

const CodeSnippetCreation = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>New code snippet</div>
            <TextArea rows={30}></TextArea>
            <div style={styles.footer}>
                <Select
                    style={styles.languageSelect}
                    options={OPTIONS}
                />
                <Button
                    type="primary"
                >
                    Save
                </Button>
            </div>
        </div>
    )
};

export default CodeSnippetCreation;