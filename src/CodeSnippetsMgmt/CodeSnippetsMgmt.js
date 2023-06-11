import React, { useState } from "react";
import CodeSnippetTable from "./CodeSnippetTable";
import CodeSnippet from "./CodeSnippet";

const defaultShowingKey = -1;

const CodeSnippetsMgmt = () => {
  const [showingKey, setShowingKey] = useState(defaultShowingKey);

  return showingKey === defaultShowingKey ?
    (<CodeSnippetTable setShowingKey={setShowingKey} />) :
    (<CodeSnippet showingKey={showingKey} setShowingKey={setShowingKey} />);
};

export default CodeSnippetsMgmt;
