import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(), // Certifique-se de que o plugin React está adicionado
    ],
    server: {
        hmr: {
            host: '172.16.238.6',
        },
    },
});
