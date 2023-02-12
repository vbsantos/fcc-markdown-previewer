import hljs from "highlight.js"
import 'highlight.js/styles/base16/solarized-dark.css';
import { Renderer } from "marked";

export default {
  renderer: new Renderer(),
  highlight: function(code: string, lang: string) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartypants: false,
  xhtml: false
}
