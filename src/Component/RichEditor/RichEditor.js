import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
  initialContent?: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialContent,
  onChange,
}) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      const contentState = convertFromRaw(JSON.parse(initialContent));
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    if (initialContent) {
      const contentState = convertFromRaw(JSON.parse(initialContent));
      const newEditorState = EditorState.push(editorState, contentState);
      setEditorState(newEditorState);
    }
  }, [initialContent]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    if (onChange) {
      const contentState = state.getCurrentContent();
      const content = JSON.stringify(convertToRaw(contentState));
      onChange(content);
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "white",
        padding: "1rem",
      }}
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'list'],
          inline: { options: ['bold', 'italic', 'underline'] },
          list: { options: ['unordered', 'ordered'] },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
