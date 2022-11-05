import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

hljs.configure({
  languages: [
    'javascript',
    'jsx',
    'sh',
    'bash',
    'html',
    'scss',
    'css',
    'json',
    'xml',
    'markdown',
    'sql',
    'typescript',
    'json',
    'go',
    'php',
    'python',
  ],
});

window.hljs = hljs;
