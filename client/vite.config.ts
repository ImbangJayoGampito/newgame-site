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
const customAddress: string = String(process.env.IP);
const serverUrl: string = `http://${customAddress}:${port}`;
console.log(serverUrl);
export default defineConfig({

  plugins: [react(),
  tailwindcss()
  ],
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
    proxy: {

      '/api': {

        target: serverUrl,
        changeOrigin: true,

      },

    },

  },
});