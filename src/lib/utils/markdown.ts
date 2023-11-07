import hljs from 'highlight.js';
import Markdown from 'markdown-it';

export const md = Markdown({
	highlight: (str, lang) => {
		const code =
			lang && hljs.getLanguage(lang)
				? hljs.highlight(str, {
						language: lang,
						ignoreIllegals: true
				  }).value
				: '';
		return `<pre class="hljs"><code>${code}</code></pre>`;
	}
});
