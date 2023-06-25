import React, { useState } from "react";
import CodeSnippetTable from "./CodeSnippetTable";
import CodeSnippetDisplay from "./CodeSnippetDisplay";

const defaultShowingKey = -1;

const CodeSnippetsMgmt = () => {
  const [showingKey, setShowingKey] = useState(defaultShowingKey);

  return showingKey === defaultShowingKey ?
    (<CodeSnippetTable setShowingKey={setShowingKey} />) :
    (<CodeSnippetDisplay showingKey={showingKey} setShowingKey={setShowingKey} />);
};

export default CodeSnippetsMgmt;
