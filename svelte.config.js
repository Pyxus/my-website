import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeSlug from 'rehype-slug';

const mdsvexOptions = {
	extensions: ['.svx'],
	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [rehypeSlug],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'poimandres', //TODO: Change theme, also look into shiki twoslash
			})

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\`}`
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [ vitePreprocess(), mdsvex(mdsvexOptions)],
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter(),
	}
};
export default config;