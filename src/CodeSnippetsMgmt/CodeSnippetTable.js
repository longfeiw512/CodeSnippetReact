import React, { useEffect, useState } from "react";
import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from "antd";
import { List } from "immutable";
import reactCSS from "reactcss";
import CodeSnippetCreation from "./CodeSnippetCreation";

const styles = reactCSS({
    "default": {
        createButton: {
            marginBottom: "20px"
        },
        header: {
            fontSize: "28px",
            fontWeight: "bold",
            padding: "20px 0 20px 0"
        }
    }
});

const mock = [
    {
        name: "test1.js",
        key: 1,
        creationDate: 1686422777,
        lastUpdateDate: 1686422777
    },
    {
        name: "test2.java",
        key: 2,
        creationDate: 1686423081,
        lastUpdateDate: 1686423081
    }
];

const CodeSnippetTable = ({ setShowingKey }) => {
    const [codeSnippets, setCodeSnippets] = useState(List());
    const [showCodeCreation, setShowCodeCreation] = useState(false);
    useEffect(() => {
        if (codeSnippets.size === 0) {
            setCodeSnippets(List(mock));
        }
    }, [codeSnippets, setCodeSnippets]);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (_, { name, key }) =>
                <Button type="link" onClick={_ => setShowingKey(key)} >{name}</Button>
        },
        {
            title: "Creation Date",
            dataIndex: "creationDate",
            key: "creationDate",
            render: (_, { creationDate }) =>
                (new Date(creationDate * 1000)).toISOString()
        },
        {
            title: "Last Update Date",
            dataIndex: "lastUpdateDate",
            key: "lastUpdateDate",
            render: (_, { lastUpdateDate }) =>
                (new Date(lastUpdateDate * 1000)).toISOString()
        }
    ];

    return (
        <>
            {showCodeCreation ? (
                <CodeSnippetCreation />
            ) :
                (<>
                    <div style={styles.header}>Your code snippets</div>
                    <Button
                        icon={<EditOutlined />}
                        type="primary"
                        style={styles.createButton}
                        onClick={() => setShowCodeCreation(true)}
                    >
                        Create
                    </Button>
                    <Table columns={columns} dataSource={[...codeSnippets]} />
                </>)}
        </>
    );
};

export default CodeSnippetTable;
