import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export const baseUrl = "/rojalbud/";

// https://vite.dev/config/
export default defineConfig({
	base: baseUrl,
	plugins: [react()],
	optimizeDeps: {
		include: ["@emotion/styled"],
	},
});
