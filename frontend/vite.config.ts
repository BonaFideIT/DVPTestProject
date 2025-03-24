import { defineConfig } from 'vite'
import { resolve } from "path"
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { djangoVitePlugin } from 'django-vite-plugin'


// https://vite.dev/config/
export default defineConfig({
  base : '/static/',
  build: {
    manifest: "manifest.json",
    emptyOutDir: true,
    sourcemap: true,
    outDir: resolve(__dirname, './dist'),
    rollupOptions: {
      output: {
        assetFileNames: "[name]/main.[ext]",
        chunkFileNames: "[name]/main.js",
        entryFileNames: "[name]/main.js",
      }
    }
  },
  plugins: [
    svelte(),
    djangoVitePlugin({
      input:{
        // @ts-expect-error Record<string, string> is not supported yet
        foo: resolve(__dirname, './src/main.ts'),
      },
      root: resolve(__dirname, '../dvptestproject'),
    })
  ],
})
