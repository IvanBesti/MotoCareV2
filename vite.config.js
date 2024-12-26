import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx', 'resources/css/app.css'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources'),
        },
    },
    build: {
        outDir: 'build', // Tempatkan hasil build di luar public
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    const extType = assetInfo.name.split('.').pop();
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        return 'assets/images/[name]-[hash][extname]';
                    } else if (/css/i.test(extType)) {
                        return 'assets/css/[name]-[hash][extname]';
                    } else {
                        return 'assets/[name]-[hash][extname]';
                    }
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
    publicDir: 'public', // Public folder tetap untuk file statis
});