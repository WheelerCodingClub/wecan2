import adapter from "@sveltejs/adapter-node";
import { env } from "node:process";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const inAContainer = env.IN_A_CONTAINER === "1";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: !inAContainer,
		},
	},
};

export default config;
