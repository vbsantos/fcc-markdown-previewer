import { useState } from 'react';

import { marked } from 'marked';
import DOMPurify from 'dompurify';

import { defaultMarkdown } from './config/defaultMarkdown';
import markedOptions from './config/markedOptions';
import './style.css'

export const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const onChangeHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.currentTarget.value);
  };

  const onExportHandler = () => console.log('Exportar Markdown')

  const onImportHandler = () => console.log('Importar Markdown')

  return (
    <>
      <header id="header">
        <h1>Markdown Previewer</h1>
        <button id="export-button" onClick={onExportHandler}>Export</button>
        <button id="import-button" onClick={onImportHandler}>Import</button>
      </header>
      <div id="main-container">
        <textarea id="editor" onChange={onChangeHandler} defaultValue={markdown} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(markdown, markedOptions)) }}></div>
      </div>
    </>
  )
};
