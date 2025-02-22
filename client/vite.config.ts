import { defineConfig } from 'vite';
import dotenv from "dotenv";
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite'
const currentDirectory = process.cwd();

// console.log(`Current directory: ${currentDirectory}`);


// Load environment variables from a custom path starting from the root directory
let env_path = path.resolve(currentDirectory, '../server.env');
dotenv.config({ path: env_path });
const port: number = Number(process.env.PORT);
const customAddress: string = String(process.env.IP) || '127.0.0.1';
const serverUrl: string = `http://${customAddress}:${port}`;
console.log(serverUrl);
export default defineConfig({

  plugins: [react(),
  tailwindcss()
  ],
  preview: {
    port: 3000,
  },
  resolve: {

    alias: {

      '@models': path.resolve(currentDirectory, '../server.env'), // Adjust the path to point to the models directory

    },

  },
  server: {
    port: 3000,
    proxy: {

      '/api': {

        target: serverUrl,
        changeOrigin: true,

      },
      '/meow': {
        target: serverUrl,
        changeOrigin: true
      }
    },

  },
});