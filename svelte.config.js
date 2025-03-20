import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
		},
		prerender: {
			default: true,
			handleHttpError: ({ path, referrer, message }) => {
				console.warn(`${path} referido desde ${referrer} falló en la prerenderización: ${message}`);
			}
		}
	}
};

export default config;