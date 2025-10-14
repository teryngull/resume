import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
      plugins: [react()],
      base: '/',
      server: {
        open: true,
        port: 5500,
      },
  };

  if (command !== 'serve') {
      config.base = '/resume/';
  }

  return config;
});
