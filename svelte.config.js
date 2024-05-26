import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex, escapeSvelte } from 'mdsvex';
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeSlug from 'rehype-slug';
import rehypeClassNames from 'rehype-class-names'

const mdsvexOptions = {
	extensions: ['.svx'],
	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [
		[rehypeSlug], 
		[rehypeClassNames, {
			'h1,h2,h3': 'pt-4 pb-4 font-semibold',
			'h1': 'h1',
			'h2': 'h2',
			'h3': 'h3',
			'p': 'pb-4',
			'a': 'font-medium text-secondary-500 hover:underline',
			'ol': 'list-decimal list-inside pb-4',
			'ul': 'list-disc list-inside pb-4',
			'li': 'pb-3',
			'code': 'font-mono rounded variant-ghost-surface pl-1 pr-1 pb-0.5 pt-0.5'
		}],
	],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'one-dark-pro', //TODO: Change theme, also look into shiki twoslash
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