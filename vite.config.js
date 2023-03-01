import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

export default defineConfig({

	plugins: [
		react(),
		VitePWA({
			srcDir: "./src",
			// mode: 'development',
			scope: "/",
			base: "/",
			devOptions: {
				enabled: true
			},
			registerType: "autoUpdate",
			injectRegister: "auto",
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
				sourcemap: true
			},
			includeAssets: ['vite.svg', 'maskable_icon.png', 'robots.txt', 'vite.png'],
			manifest: {
				name: 'Ionic React Vite PWA',
				short_name: 'IonicReactVitePWA',
				description: 'A sprouting product of Joseph Godwin Kimani',
				theme_color: '#ffffff',
				//start_url: "/",
				scope: "/",
				icons: [
					{
						src: 'maskable_icon_x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'maskable_icon_x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'vite.svg',
						sizes: '32x32',
						type: 'image/svg'
					}
				]
			},
			test: {
				globals: true,
				environment: 'jsdom',
				setupFiles: ['../.test/setup.js'],
				include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
				exclude: ['node_modules', 'dist', '.idea', '.vscode', '.git', '.cache'],
			},
		})],
	resolve: {
		alias: [
			{
				find: /^~.+/,
				replacement: (val) => {
					return val.replace(/^~/, "");
				}
			}
		]
	},
	build: {
		commonjsOptions: {
			transformMixedEsModules: true
		}
	}
});

