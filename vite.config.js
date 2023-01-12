import {defineConfig} from 'vite';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import ViteRestart from 'vite-plugin-restart';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        manifest: true,
        outDir: './public/dist/',
        rollupOptions: {
            input: {
                app: './src/app/app.ts',
                main: "./src/styles/main.scss",
            },
            output: {
                sourcemap: true
            },
        },
    },
    plugins: [
        manifestSRI(),
        tsconfigPaths(),
        viteCompression({
            filter: /\.(ts|js|mjs|json|css|map)$/i
        }),
        ViteRestart({
            reload: [
                './templates/**/*',
            ],
        }),
    ],
    publicDir: path.resolve(__dirname, 'src/public'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@scss': path.resolve(__dirname, 'src/styles/main.scss'),
            '@ts': path.resolve(__dirname, 'src/app/app.ts'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
    },
}));