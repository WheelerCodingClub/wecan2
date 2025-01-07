import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { readFile } from "node:fs/promises";


let cert: Buffer | undefined;
let key: Buffer | undefined;
try {
	await Promise.all([
		readFile("cert.pem").then((result) => cert = result),
		readFile("key.pem").then((result) => key = result),
	])
} catch {}

export default defineConfig({
	plugins: [sveltekit()],
	server: cert || key
	? {
		https: {
			cert,
			key,
		},
		proxy: {}
	} : undefined,
});
