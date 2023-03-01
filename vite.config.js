import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import legacy from "@vitejs/plugin-legacy";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";

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
				setupFiles: ['../tests/setup.js'],
				include: ['**/*(*.)?{test,spec}.{js,jsx,cjs,ts,mts,cts,tsxm,}'],
				exclude: ['.vscode', 'node_modules', 'dist', '.idea', '.git', '.cache'],
			},
		}),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		svgr({
			// Set it to `true` to export React component as default.
			// Notice that it will overrides the default behavior of Vite.
			exportAsDefault: false,

			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				// ...
			},

			// esbuild options, to transform jsx to js
			esbuildOptions: {
				// ...
			},

			//  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
			include: '**/*.svg',

			//  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
			exclude: '',
		}),
		ViteImageOptimizer({
			// Include all assets within the public directory defined in Vite. When true it will recursively traverse the directory and optimize all the assets.
			includePublic: true,
			// Logs the optimization stats to terminal output with file size difference in kB and percent increase/decrease.
			logStats: true,
			svg: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								cleanupNumericValues: false,
								removeViewBox: false, // https://github.com/svg/svgo/issues/1128
							},
							cleanupIDs: {
								minify: false,
								remove: false,
							},
							convertPathData: false,
						},
					},
					'sortAttrs',
					{
						name: 'addAttributesToSVGElement',
						params: {
							attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
						},
					},
				],
			},
			png: {
				// https://sharp.pixelplumbing.com/api-output#png
				quality: 100,
			},
			jpeg: {
				// https://sharp.pixelplumbing.com/api-output#jpeg
				quality: 100,
			},
			jpg: {
				// https://sharp.pixelplumbing.com/api-output#jpeg
				quality: 100,
			},
			tiff: {
				// https://sharp.pixelplumbing.com/api-output#tiff
				quality: 100,
			},
			// gif does not support lossless compression
			// https://sharp.pixelplumbing.com/api-output#gif
			gif: {},
			webp: {
				// https://sharp.pixelplumbing.com/api-output#webp
				lossless: true,
			},
			avif: {
				// https://sharp.pixelplumbing.com/api-output#avif
				lossless: true,
			},
		}),
	],
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