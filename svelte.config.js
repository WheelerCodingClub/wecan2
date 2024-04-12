import adapter from "@sveltejs/adapter-node";
import { env } from "node:process";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isInCodespaces = !!env.CODESPACES;

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: !isInCodespaces,
		},
	},
};

export default config;
