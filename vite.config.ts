import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export const baseUrl = "/rojalbud";

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	build: {
		outDir: "dist",
		assetsDir: "assets",
	},
	plugins: [react()],
	optimizeDeps: {
		include: ["@emotion/styled"],
	},
});
