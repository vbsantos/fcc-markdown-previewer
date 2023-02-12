import { useRef, useState } from 'react';

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { saveAs } from 'file-saver';

import { defaultMarkdown } from './config/defaultMarkdown';
import markedOptions from './config/markedOptions';
import './style.css'

export const App = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const uploadFileRef = useRef<HTMLInputElement>(null);

  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);

  const onChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
  };

  const onExportHandler = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, 'markdown.md');
  };

  const onImportHandler = () => {
    uploadFileRef?.current?.click();
  };

  const importHandler = (event: any) => {
    const file = event.target.files[0];
    console.log({file});
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (textareaRef.current) {
        textareaRef.current.value = e.target.result;
      }
      setMarkdown(e.target.result)
    };
    reader.readAsText(file);
  }

  return (
    <>
      <header id="header">
        <h1>Markdown Previewer</h1>
        <button id="export-button" className='button' onClick={onExportHandler}>Download</button>
        <button id="import-button" className='button' onClick={onImportHandler}>Upload</button>
        <input type="file" ref={uploadFileRef} onChange={importHandler} />
      </header>
      <div id="main-container">
        <textarea id="editor" ref={textareaRef} onChange={onChangeHandler} defaultValue={markdown} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(markdown, markedOptions)) }}></div>
      </div>
    </>
  )
};
